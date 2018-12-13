import React from "react";
const Input = ({ name, value, onChange, label, type, hint, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <small className="form-text text-muted">{hint}</small>
    </div>
  );
};

export default Input;
