import { FunctionComponent } from "react";
import ButtonProps from "@/types/ButtonProps";

const buttonColors = {
  primary: '#007bff',
  secondary: '#000000FF',
  danger: '#dc3545',
  greyC: '#64748B'
}

const ButtonIcon: FunctionComponent<ButtonProps> = ({className, name, children, onClick, href, color = 'primary', type}) =>{
  const buttonStyle = {
    color: buttonColors[color]
  }
  return (

      <button type={type} className={className} onClick={onClick} style={buttonStyle}>
        {children}{name}
      </button>
  )
}


const Button: FunctionComponent<ButtonProps> = ({
                                                  disabled,
                                                  color = 'primary',
                                                  size,
                                                  isActive,
                                                  minWidth = 112,
                                                  minHeight = 42,
                                                  w,
                                                  onClick,
                                                  children,
                                                  type,
                                                  style,
                                                  value
                                                }) => {
  return (
    <button
      className={`c-button w-[${w}] c-button--${color} text-[${size}] ${
        isActive && `--is-active`
      } flex items-center justify-center`}
      style={{ minWidth: `${minWidth}px`, minHeight: `${minHeight}px`, ...style }}
      onClick={onClick}
      type={type}
      value={value}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export {
  Button,
  ButtonIcon
}
