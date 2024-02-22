import React, { useMemo, useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./Home.css";
import { Input } from "antd";
import { BiSortAlt2 } from "react-icons/bi";

function Home() {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "projeto",
      header: "Projeto",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "responsavel",
      header: "Responsável",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "servicetag",
      header: "S/N",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "patrimonio",
      header: "Patrimônio",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "marca",
      header: "Marca",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "modelo",
      header: "Modelo",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "configuracao",
      header: "Configuração",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => info.getValue(),
    },
  ];

  const [data, setData] = useState([]);
  const { Search } = Input;

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/cadastro");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="title">
        <h4>Lista de Equipamentos</h4>
      </div>

      <div className="container">
        <Search
          placeholder="Pesquisar"
          allowClear
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="global-search"
          style={{ width: 230, marginTop: 30 }}
        />

        {/*Tabela*/}
        <div className="table-container">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {header.column.getCanSort() &&
                              header.column.id !== "action" && (
                                <BiSortAlt2
                                  className="sort-button"
                                  onClick={header.column.getToggleSortingHandler()}
                                />
                              )}
                          </div>
                          {header.column.getCanFilter() &&
                          header.column.id !== "action" ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <div className="tr" key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </div>
              );
            })}
          </tbody>
        </table>
        </div>
        <br />

        {/*Paginação botoões*/}
        <div className="pagination">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>

          {/*Paginação*/}

          <span>
            <br />
            <br />
            <strong>
              <span> Página </span>
              {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <span>
            | Página:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? e.target.value - 1 : 0;
                table.setPageIndex(page);
              }}
              min={1}
            />
          </span>

          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(e.target.value);
            }}
          >
            {[10, 20, 40, 60, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>{table.getPrePaginationRowModel().rows.length} Itens totais. </div>
      </div>
    </>
  );
}

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <DebouncedInput
        type="number"
        value={columnFilterValue?.[0] ?? ""}
        onChange={(value) => column.setFilterValue((old) => [value, old?.[1]])}
        min={0}
        placeholder={"Filtrar"}
      />
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={"Filtrar"}
        list={column.id + "list"}
      />
    </>
  );
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="column-input">
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Home;
