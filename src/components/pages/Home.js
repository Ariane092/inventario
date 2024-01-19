import "./Home.css";
import React, { useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import {
  BsDisplay,
  BsLaptop,
  BsPrinter,
  BsSearch
} from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";

const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'projeto',
    header: 'Projeto',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'responsavel',
    header: 'Responsável',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'tipo',
    header: 'Tipo',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'servicetag',
    header: 'S/N',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'patrimonio',
    header: 'Patrimônio',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'marca',
    header: 'Marca',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'modelo',
    header: 'Modelo',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'configuracao',
    header: 'Configuração',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (props) => <p>{props.getValue()}</p>
  },
];

function Home() {
  const [dados, setDados] = useState([]);
  const table = useReactTable({
    columns,
    data: dados,
    // state: {
    //   columnFilters, 
    // }, 
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel()
  });

  const [columnFilters, setColumnFilters] = useState([]);

  const [displayLines, setDisplayLines] = useState(10);

  const handleSelectLines = (event) => {
    const lines = parseInt(event.target.value, 10);
    setDisplayLines(lines);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/home');
        const data = await response.json();
        console.log('Resposta da API:', data);
        setDados(data);
      } catch (error) {
        console.error('Erro ao obter dados da API', error);
      }
    };

    fetchData();
  }, []);

  console.log(table.getHeaderGroups());

  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>

      <div className="search-itens">
        <select onChange={handleSelectLines}>
          <option value="10">Exibir 10 linhas</option>
          <option value="25">Exibir 25 linhas</option>
          <option value="50">Exibir 50 linhas</option>
          <option value="100">Exibir 100 linhas</option>
        </select>
        <div>
          <BsSearch className="search-icon" />
          <input placeholder="Pesquisar"></input>
        </div>
      </div>

      <div className="bloc-tabs">
        <div className="tabs"><BsLaptop /></div>
        <div className="tabs"><BsPrinter /></div>
        <div className="tabs"><BsDisplay /></div>
        <div className="tabs"><PiOfficeChair /></div>
      </div>

      <table>
        {table.getHeaderGroups().map((headerGroup) => (
          <thead key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th  key={header.id}>
                {header.column.columnDef.header}
              </th>
            ))}
          </thead>
        ))}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getCenterVisibleCells().map((cell) => (
              <td  key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Home;
