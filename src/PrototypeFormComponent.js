import React, { useState } from "react";

const PrototypeForm = {
  name: "Adilet",
  title: "Geeks",
  mail: "naebshiki@react.com",
  feature: "coding",
};

function FormComponent() {
  const [formData, setFormData] = useState(PrototypeForm);

  function handleNameChange(e) {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  }
  function handleTitleChange(e) {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  }
  function handleMailChange(e) {
    setFormData({
      ...formData,
      mail: e.target.value,
    });
  }
  function handleFeatureChange(e) {
    setFormData({
      ...formData,
      feature: e.target.value,
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "darkgray" }}>Name: </label>
        <input type="text" value={formData.name} onChange={handleNameChange} />
        <li style={{ color: "red", listStyleType: "none", marginTop: "20px" }}>
          {formData.name}
        </li>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "darkgray" }}>Title: </label>
        <input
          type="text"
          value={formData.title}
          onChange={handleTitleChange}
        />
        <li style={{ color: "red", listStyleType: "none", marginTop: "20px" }}>
          {formData.title}
        </li>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "darkgray" }}>Mail: </label>
        <input type="text" value={formData.mail} onChange={handleMailChange} />
        <li style={{ color: "red", listStyleType: "none", marginTop: "20px" }}>
          {formData.mail}
        </li>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "darkgray" }}>Feature: </label>
        <input
          type="text"
          value={formData.feature}
          onChange={handleFeatureChange}
        />
        <li
          style={{
            color: "red",
            marginTop: "10px",
            listStyleType: "none",
            marginTop: "20px",
          }}
        >
          {formData.feature}
        </li>
      </div>
    </div>
  );
}

export default FormComponent;
