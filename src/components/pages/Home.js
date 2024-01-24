import "./Home.css";
import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
  useFilters,
} from "@tanstack/react-table";
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
  const [filtering, setFiltering] = useState("");
  const [input, setInput] = useState("");
  const [columnFilter, setColumnFilter] = useState([]);

  const table = useReactTable({
    columns,
    data: dados,
    state: {
      globalFilter: filtering,
      columnFilter,
    },
    onGlobalFilterChanged: setFiltering,
    onColumnFilterChanged: setColumnFilter,
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

      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />

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
                <div className="input-column">
                  <input  />
                </div>
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

export default Home;

