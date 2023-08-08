import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal c23123123123123123?
   */
  primary: boolean;
  /**
   * What background color to use
   */
  backgroundColor: string;
  /**
   * How large should the button be?
   * @default medium
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   **/
  label: string;
}

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
