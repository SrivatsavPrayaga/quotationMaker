import { useState } from "react";

const Header = ({ setHeaderImage, setBackgroundImage, setBackgroundColor }) => {
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (type === "logo") setHeaderImage(reader.result);
      else setBackgroundImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="header">
      <input type="file" onChange={(e) => handleImageUpload(e, "logo")} placeholder="Upload Logo" />
      <input type="file" onChange={(e) => handleImageUpload(e, "background")} placeholder="Upload Background" />
      <input type="color" onChange={(e) => setBackgroundColor(e.target.value)} placeholder="Header Color" />
    </div>
  );
};

export default Header;