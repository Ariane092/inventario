import React, { useRef, useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import "./Home.css";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';

function Home() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [data, setData] = useState([]);
  const { Search } = Input;

  const table = useReactTable({
    data,
    state: {
      globalFilter,
    }, 
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/cadastro");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      key: "id",
      title: "ID",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('id'),
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "projeto",
      title: "Projeto",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('projeto'),
      sorter: (a, b) => a.projeto.length - b.projeto.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "responsavel",
      title: "Responsável",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('responsavel'),
      sorter: (a, b) => a.responsavel.length - b.responsavel.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "tipo",
      title: "Tipo",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('tipo'),
      sorter: (a, b) => a.tipo.length - b.tipo.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "servicetag",
      title: "S/N",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('servicetag'),
      sorter: (a, b) => a.servicetag.length - b.servicetag.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "patrimonio",
      title: "Patrimônio",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('patrimonio'),
      sorter: (a, b) => a.patrimonio.length - b.patrimonio.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "marca",
      title: "Marca",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('marca'),
      sorter: (a, b) => a.marca.length - b.marca.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "modelo",
      title: "Modelo",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('modelo'),
      sorter: (a, b) => a.modelo.length - b.modelo.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "configuracao",
      title: "Config",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('configuracao'),
      sorter: (a, b) => a.configuracao.length - b.configuracao.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: "status",
      title: "Status",
      cell: (info) => info.getValue(),
      ...getColumnSearchProps('status'),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <>
      <div className="container">
        <Search
          placeholder="Pesquisar"
          allowClear
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          style={{ width: 230, marginTop: 0 }}
        />

        {/*Tabela*/}
        <div className="table-container"></div>
        <Table columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))} />
      </div>
    </>
  );
}

export default Home;
