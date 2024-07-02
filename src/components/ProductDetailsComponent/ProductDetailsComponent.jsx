import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images/imagesSmall.webp";
import {
  WrapperAddessProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColSmall,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px " }}
      >
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColSmall>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          PC GVN x ASUS Back to Future (Intel i5-14400F/ VGA RTX 4070 Super)
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "#fbd322" }} />
          <StarFilled style={{ fontSize: "12px", color: "#fbd322" }} />
          <StarFilled style={{ fontSize: "12px", color: "#fbd322" }} />
          <WrapperStyleTextSell> | da ban 999+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>2000000đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddessProduct>
          <span> Giao Đến</span>
          <span className="address"> 41 lien khu 32-5</span> -
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddessProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: '10px 0'
          }}
        >
          <div style={{ marginBottom: "10px" }}> Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "tranparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "16px" }} />
            </button>
            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "tranparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
            }}
            textButton={"Chọn mua"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13 ,92,182)",
            }}
            textButton={"Mua trả sau"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: " 15px" }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
