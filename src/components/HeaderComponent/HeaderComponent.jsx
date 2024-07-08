import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperLogoHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import imageLogo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const HeaderComponent = () => {
  const navigate = useNavigate()
  const user = useSelector((state)=> state.user)
  const handleNavigateLogin  = () =>{
    navigate('/sign-in')
  }
  console.log('user', user);
  return (
    <div style={{width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent:'center'}} >
      <WrapperHeader>
        <Col span={6}>
          <WrapperLogoHeader src={imageLogo} preview={false} alt='image-logo' width= "50px" height='50px' />
          <WrapperTextHeader>RealStock</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton=" Tìm kiếm"
            placeholder="Nhập sản phẩm muốn tìm kiếm"
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: '40px', alignItems: 'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />

              {user?.name ?(
                <div style={{cursor:'pointer'}}>{user.name}</div>
              ) : (
            <div onClick={handleNavigateLogin} style={{cursor:'pointer'}} >
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall> Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>

              )}


          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small' >
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff"}} />

            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
