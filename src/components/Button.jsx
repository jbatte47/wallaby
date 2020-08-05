import React from 'react';

const Button = ({ children, onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
