import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function FetchProvider({ children }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/responsavel")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, responsavel: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar responsáveis:', error);
      });

    fetch("http://localhost:3001/projeto")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, projeto: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar projeto:', error);
      });

    fetch("http://localhost:3001/status")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, status: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar status:', error);
      });

    fetch("http://localhost:3001/marca")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, marca: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar marca:', error);
      });

      fetch("http://localhost:3001/modelo")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, modelo: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar modelo:', error);
      });

      fetch("http://localhost:3001/memoria")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, memoria: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar memoria:', error);
      });

      fetch("http://localhost:3001/hd")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, hard_disk: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar hd:', error);
      });

      fetch("http://localhost:3001/processador")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, processador: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar processador:', error);
      });

      fetch("http://localhost:3001/office")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, office: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar office:', error);
      });

      fetch("http://localhost:3001/equipamento")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, tipo_equipamento: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar equipamento:', error);
      });

      fetch("http://localhost:3001/escritorio")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, tipo_escritorio: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar escritorio:', error);
      });

      fetch("http://localhost:3001/computadores")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, tipo_computadores: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar computadores:', error);
      });

      fetch("http://localhost:3001/impressoras")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, tipo_impressoras: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar impressoras:', error);
      });

      fetch("http://localhost:3001/monitores")
      .then(response => response.json())
      .then(data => {
        setData(prevData => ({ ...prevData, tipo_monitores: data }));
      })
      .catch(error => {
        console.error('Erro ao buscar monitores:', error);
      });

  }, []);

  return <Context.Provider value={{data}}>{children}</Context.Provider>;
}

export { FetchProvider, Context };

