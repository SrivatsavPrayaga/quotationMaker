import { useState } from "react";
import Header from "./components/header";
import Details from "./components/clientdetails";
import Table from "./components/table";
import PDFPreview from "./components/pdfpreview";
import "./App.css";

const App = () => {
  const [headerImage, setHeaderImage] = useState(null);
  const [companyInfo, setCompanyInfo] = useState({});
  const [clientInfo, setClientInfo] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="app-container">
      <div className="main-content">
          
        <div className="form-section">
           <Header setHeaderImage={setHeaderImage} />
          <Details setCompanyInfo={setCompanyInfo} setClientInfo={setClientInfo} />
          <Table items={items} setItems={setItems} setTotal={setTotal} />
        </div>
        <div className="pdf-section">
          <PDFPreview headerImage={headerImage} companyInfo={companyInfo} clientInfo={clientInfo} items={items} total={total} />
        </div>
      </div>
    </div>
  );
};

export default App;