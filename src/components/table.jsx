import { useState } from "react";

const Table = ({ items, setItems, setTotal }) => {
  const addItem = () => {
    setItems(prev => [...prev, { name: "", quantity: 1, price: 0, description: "" }]);
  };

  const updateItem = (index, field, value) => {
    setItems(prev => {
      const newItems = [...prev];
      newItems[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
      setTotal(newItems.reduce((sum, item) => sum + item.quantity * item.price, 0));
      return newItems;
    });
  };

  return (
    <div className="table-container">
      <h3>Quotation Details</h3>
      <button onClick={addItem} className="add-btn">Add Item</button>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price/Quantity</th>
            <th>Total Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><input type="text" placeholder="Item Name" onChange={(e) => updateItem(index, "name", e.target.value)} /></td>
                <td><input type="number" value={item.quantity || 1} onChange={(e) => updateItem(index, "quantity", e.target.value)} /></td>
                <td><input type="number" value={item.price || 0} onChange={(e) => updateItem(index, "price", e.target.value)} /></td>
                <td>{item.quantity * item.price}</td>
                <td><input type="text" placeholder="Material Details" onChange={(e) => updateItem(index, "description", e.target.value)} /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>No items added yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;