import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";
import { Button, Pagination } from "antd";
import { PrinterFilled } from "@ant-design/icons";
import html2pdf from "html2pdf.js";

function QrCode() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 28;
  const contentRef = useRef(null);

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

  const handlePrint = () => {
    const option = {
      margin: 0,
      filename: "equipamentosCepea.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
    };

    html2pdf().from(contentRef.current).set(option).output("dataurlnewwindow");
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex).map((item) => (
      <div
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          width: "250px",
        }}
      >
        <QRCode value={`ID: ${item.id}`} size={60} includeMargin={true} />
        <ul style={{ listStyleType: "none", justifyItens: "flex-start", fontSize: '13px'}}>
          <li>CEPEA</li>
          <li>
            {item.tipo_equipamento} {item.id}
          </li>
          <li>{item.projeto}</li>
        </ul>
      </div>
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Qr Code dos Equipamentos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "25px",
        }}
      >
        <Button onClick={handlePrint}><PrinterFilled /> Imprimir</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "35px" }} ref={contentRef}>
        {renderItems()}
      </div>
      <Pagination current={currentPage} total={data.length} pageSize={pageSize} onChange={handlePageChange} />
    </div>
  );
}

export default QrCode;
