import { useState } from "react";

const Details = ({ setCompanyInfo, setClientInfo }) => {
  const handleChange = (section, field, value) => {
    if (section === "company") setCompanyInfo(prev => ({ ...prev, [field]: value }));
    else setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="details-section">
      <div className="company-info">
        <h3>Company Information</h3>
        <input type="text" placeholder="Company Name" onChange={(e) => handleChange("company", "name", e.target.value)} />
        <input type="text" placeholder="Address" onChange={(e) => handleChange("company", "address", e.target.value)} />
        <input type="text" placeholder="Phone" onChange={(e) => handleChange("company", "phone", e.target.value)} />
      </div>

      <div className="client-info">
        <h3>Client Information (To)</h3>
        <input type="text" placeholder="Client Name" onChange={(e) => handleChange("client", "name", e.target.value)} />
        <input type="text" placeholder="Address" onChange={(e) => handleChange("client", "address", e.target.value)} />
        <input type="text" placeholder="Phone Number" onChange={(e) => handleChange("client", "phone", e.target.value)} />
        <input type="text" placeholder="Email (optional)" onChange={(e) => handleChange("client", "email", e.target.value)} />
      </div>
    </div>
  );
};

export default Details;