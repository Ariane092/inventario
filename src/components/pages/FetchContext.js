import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

function FetchContext({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async (endpoint) => {
      try {
        const response = await fetch(`http://localhost:3001/${endpoint}`);
        const data = await response.json();
        setData(prevData => ({ ...prevData, [endpoint]: data }));
      } catch (error) {
        console.error(`Erro ao obter dados da API para ${endpoint}`, error);
      }
    };

    fetchData("responsavel");
    fetchData("projeto");
    fetchData("status");
    fetchData("marca");
    fetchData("modelo");
    fetchData("memoria");
    fetchData("hd");
    fetchData("processador");
    fetchData("office");
    fetchData("equipamento");
    fetchData("escritorio");
    fetchData("computadores");
    fetchData("impressoras");
    fetchData("monitores");
  }, []);

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export default FetchContext;
