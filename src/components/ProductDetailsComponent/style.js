import { Image, Col, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 60px;
  width: 64px;
`;
export const WrapperStyleColSmall = styled(Col)`
  display: "flex";
  flex-basis: unset;
`;
export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
export const WrapperPriceProduct = styled.div`
  background-color: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
font-size: 32px;
line-height:40px;
font-weight: 500;
margin-right: 8px
padding: 10px;
margin-top: 10px;
`;
export const WrapperAddessProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overfow: hidden;
    text-overflow: ellipsisl;
  }
  span.change-address {
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
export const WrapperQualityProduct = styled.h1`
  display: flex;
  gap: 4px;
  align-item: center;
  border: 1px solid #ccc;
  width: 100px;
`;
export const WrapperBtnQualityProduct = styled.span`
    border: 1px solid #ccc;
    

`;
export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 50px;
    boder-top:none;
    boder-bottom:none;
  }
`;
