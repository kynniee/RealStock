import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1280px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    margin-left: 30px; 
    &:hover {
        font-size: 18px;
        color: #fff;
    }
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: #1791c8;
    }
`
