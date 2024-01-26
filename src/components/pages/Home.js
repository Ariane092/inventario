import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import "./Home.css";
import { Input } from "antd";
import { BsDisplay, BsLaptop, BsPrinter } from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";
import { BiSortAlt2 } from "react-icons/bi";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "projeto",
    header: "Projeto",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "responsavel",
    header: "Responsável",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "servicetag",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "patrimonio",
    header: "Patrimônio",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "marca",
    header: "Marca",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "modelo",
    header: "Modelo",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "configuracao",
    header: "Configuração",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

function Home() {
  const [dados, setDados] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const { Search } = Input;

  const table = useReactTable({
    columns,
    data: dados,
    state: {
      globalFilter: globalFilter,
      columnFilters: columnFilters,
    },
    onGlobalFilterChanged: setGlobalFilter,
    onColumnFilterChanged: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/home");
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, []);

  console.log(table.getHeaderGroups());

  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>

      <Search
        placeholder="Pesquisar"
        allowClear
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="global-search"
        style={{ width: 200, marginTop: 40 }}
      />

      <div className="bloc-tabs">
        <div className="tabs">
          <BsLaptop />
        </div>
        <div className="tabs">
          <BsPrinter />
        </div>
        <div className="tabs">
          <BsDisplay />
        </div>
        <div className="tabs">
          <PiOfficeChair />
        </div>
      </div>

      <table>
        {table.getHeaderGroups().map((headerGroup) => (
          <thead key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <BiSortAlt2
                    style={{ fontSize: "18px", margin: "3px" }}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {header.column.getCanFilter() ? (
                  
                ) : null}
              </th>
            ))}
          </thead>
        ))}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getCenterVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </table>

      <br />
      <div>
        Página {table.getState().pagination.pageIndex + 1} de{" "}
        {table.getPageCount()}
      </div>
      <div>
        <button
          onClick={() => table.previousPage()}
          isDisable={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          isDisable={!table.getCanNextPage()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return(
    <Search
    allowClear
    style={{ width: 115 }}
    {...props}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />
  );
}

function Filter({ column, table }) {
 
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === 'number' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={value => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  )
}

export default Home;
