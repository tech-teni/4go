import React from "react";

const Input = ({ type, placeholder, value, name, id, onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
      />
    </div>
  );
};

export default Input;
