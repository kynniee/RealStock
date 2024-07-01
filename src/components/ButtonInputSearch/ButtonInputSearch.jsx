import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";


const ButtonInputSearch = (props) => {

  const {
    size,
    placeholder,
    bodered,
    textButton,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(16 136 241)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bodered={bodered}
        style={{
          backgroundColor: backgroundColorInput,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderRight: 0,
        }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          borderColor: 'rgb(16, 136, 241)',
          color: colorButton,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          borderLeft: 0,
        }}
        textButton= {textButton}
        styleTextButton= {{color: colorButton}}
        icon={<SearchOutlined color=  {colorButton} style={{color:"#fff"}}/>}
      />
   </div>
  );
};

export default ButtonInputSearch;
