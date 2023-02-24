import React from "react";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-2xl": rounded,
      "bg-white": outline,
      // 'text-blue-500': outline && primary,
      // 'text-gray-900': outline && secondary,
      // 'text-green-500': outline && success,
      // 'text-yellow-400': outline && warning,
      // 'text-red-500': outline && danger
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
