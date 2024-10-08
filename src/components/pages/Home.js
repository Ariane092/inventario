import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { SearchOutlined, EyeOutlined, CopyOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import Highlighter from "react-highlight-words";
import Duplicar from "./Duplicar.js";

function Home() {
  const [duplicateOpen, setDuplicateOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const { Search } = Input;

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

  const handleGlobalSearch = (dataIndex) => {
    setSearchText(dataIndex);
  };

  const globalSearchProps = {
    placeholder: "Pesquisar",
    allowClear: true,
    value: searchText,
    onChange: (e) => setSearchText(e.target.value),
    onSearch: (value) => handleGlobalSearch(value),
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
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
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
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
          color: filtered ? "#1677ff" : undefined,
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
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      key: "id",
      dataIndex: "id",
      title: "ID",
      ...getColumnSearchProps("id"),
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "projeto",
      dataIndex: "projeto",
      title: "Projeto",
      ...getColumnSearchProps("projeto"),
      sorter: (a, b) => a.projeto.length - b.projeto.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "responsavel",
      dataIndex: "responsavel",
      title: "Responsável",
      ...getColumnSearchProps("responsavel"),
      sorter: (a, b) => a.responsavel.length - b.responsavel.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "tipo_equipamento",
      dataIndex: "tipo_equipamento",
      title: "Tipo",
      ...getColumnSearchProps("tipo_equipamento"),
      sorter: (a, b) => a.tipo_equipamento.length - b.tipo_equipamento.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "servicetag",
      dataIndex: "servicetag",
      title: "S/N",
      ...getColumnSearchProps("servicetag"),
      sorter: (a, b) => a.servicetag.length - b.servicetag.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "patrimonio",
      dataIndex: "patrimonio",
      title: "Patrimônio",
      ...getColumnSearchProps("patrimonio"),
      sorter: (a, b) => a.patrimonio.length - b.patrimonio.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "marca",
      dataIndex: "marca",
      title: "Marca",
      ...getColumnSearchProps("marca"),
      sorter: (a, b) => a.marca.length - b.marca.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "modelo",
      dataIndex: "modelo",
      title: "Modelo",
      ...getColumnSearchProps("modelo"),
      sorter: (a, b) => a.modelo.length - b.modelo.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "status",
      dataIndex: "status",
      title: "Status",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (data) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/visualizar/${data.id}`}>
            <EyeOutlined style={{ fontSize: "16px" }} />
          </Link>
          <Link to={`/home/${data.id}`}>
            <CopyOutlined
              className="copy-btn"
              onClick={() => setDuplicateOpen(true)}
            />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <Search {...globalSearchProps} style={{ width: 220, marginTop: 0 }} />
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
      />
      <Modal
        style={{
          top: 20,
        }}
        width={900}
        open={duplicateOpen}
        footer={null}
        onCancel={() => setDuplicateOpen(false)}
      >
        <Duplicar />
      </Modal>
    </>
  );
}

export default Home;
