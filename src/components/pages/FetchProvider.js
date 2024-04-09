import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function FetchProvider({ children }) {
  const [data, setData] = useState({});
  const teste = 'testando';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/projeto");
        const data = await response.json();
        console.log('fetch', data);
        setData(data);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, []);

  return <Context.Provider value={{auth: true}}>{children}</Context.Provider>;
}

export { FetchProvider, Context };
