import React from 'react';

const Button = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) => {
  const classes = [
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      data-testid={rest['data-testid'] || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 