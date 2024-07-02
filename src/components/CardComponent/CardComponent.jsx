import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReporText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import hang from "../../assets/images/hang.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 20 / 0 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={hang}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct> Iphone </StyleNameProduct>
      <WrapperReporText>
        {" "}
        <span style={{ marginRight: "4px" }}>
          <span> 4.91</span>
          <StarFilled style={{ fontSize: "12px", color: "#fbd322" }} />
        </span>
        <span> | da ban 999+</span>
      </WrapperReporText>
      <WrapperPriceText>
        100.000.000d
        <WrapperDiscountText> -5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
