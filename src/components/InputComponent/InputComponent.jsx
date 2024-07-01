import { Input } from "antd";
import React from "react";

const InputComponent = ({size, placeholder, bodered, style, ...rests}) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      bodered={bodered}
      style={style}
      {...rests}
    />
  );
};

export default InputComponent;
