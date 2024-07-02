import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images/imagesSmall.webp";
import {
  WrapperAddessProduct,
  WrapperBtnQualityProduct,
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

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
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
      <Col span={14}>
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
        <div>
          <div> Số lượng</div>
          <WrapperQualityProduct>
            <WrapperBtnQualityProduct>
              <MinusOutlined style={{ color: "#000", fontSize: "16px" }} />
            </WrapperBtnQualityProduct>
            <WrapperBtnQualityProduct>
              <WrapperInputNumber
                defaultValue={3}
                onChange={onChange}
                size="small"
              />
            </WrapperBtnQualityProduct>

            <PlusOutlined style={{ color: "#000", fontSize: "16px" }} />
          </WrapperQualityProduct>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
