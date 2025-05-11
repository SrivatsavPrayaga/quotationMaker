const Address = () => {
  return (
    <div className="address-section">
      <h3>Client Information</h3>
      <div className="client-form">
        <label>Client Name</label>
        <input type="text" placeholder="Enter Name" />
        <label>Address</label>
        <input type="text" placeholder="Enter Address" />
        <label>Phone Number</label>
        <input type="text" placeholder="Enter Phone" />
        <label>Email (optional)</label>
        <input type="email" placeholder="Enter Email" />
      </div>
    </div>
  );
};

export default Address;