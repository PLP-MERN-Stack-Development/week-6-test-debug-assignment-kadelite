import React from 'react';

const Button = ({ children, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled} data-testid="button">
    {children}
  </button>
);

export default Button; 