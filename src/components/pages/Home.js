import "./Home.css";
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import {
  BsDisplay,
  BsLaptop,
  BsPrinter,
  BsSearch
} from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";

const colums = [
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
]
function Home() {

  const [dados, setDados] = useState([]);
  const table = useReactTable({
    dados,
    colums,
    getCoreRowModel:getCoreRowModel()
  });
  
  // const [displayLines, setDisplayLines] = useState(10);
 
  // const handleSelectLines = (event) => {
  //   const lines = parseInt(event.target.value, 10);
  //   setDisplayLines(lines);
  // };



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
  console.log(table.getHeaderGroups())
  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>

      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) => (
        <Box className="tr" key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
          <Box className="th" key={header.id}>
              {header.column.columnDef.header}
            </Box>
          ))}
        </Box>
        ))}
        </Box>































      {/* <div className="search-itens">
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
          <thead>
            <tr>
              <th>ID</th>
              <th>Projeto</th>
              <th>Responsável</th>
              <th>Tipo</th>
              <th>S/N</th>
              <th>Patrimônio</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Configuração</th>
              <th>Status</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
          {dados.slice(0, displayLines).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.projeto}</td>
                <td>{item.responsavel}</td>
                <td>{item.tipo}</td>
                <td>{item.servicetag}</td>
                <td>{item.patrimonio}</td>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.configuracao}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
       

        <div>
          {Array.from(Array(pages), (item, index) => {
            return <button>{index}</button>
          })}
        </div> */}

    </div>
  );
}

export default Home;
