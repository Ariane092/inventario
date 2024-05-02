import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function FetchProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          responsavel,
          projeto,
          status,
          marca,
          modelo,
          memoria,
          hard_disk,
          processador,
          office,
          tipo_equipamento,
          tipo_escritorio,
          tipo_computadores,
          tipo_impressoras,
          tipo_monitores,
        ] = await Promise.all([
          fetch("http://localhost:3001/responsavel").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/projeto").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/status").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/marca").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/modelo").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/memoria").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/hd").then((response) => response.json()),
          fetch("http://localhost:3001/processador").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/office").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/equipamento").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/escritorio").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/computadores").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/impressoras").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3001/monitores").then((response) =>
            response.json()
          ),
        ]);

        setData({
          responsavel,
          projeto,
          status,
          marca,
          modelo,
          memoria,
          hard_disk,
          processador,
          office,
          tipo_equipamento,
          tipo_escritorio,
          tipo_computadores,
          tipo_impressoras,
          tipo_monitores,
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (
    Object.values(data).some((table) => !table || table.length === 0) ||
    loading
  )
    return null;

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
}

export { FetchProvider, Context };
