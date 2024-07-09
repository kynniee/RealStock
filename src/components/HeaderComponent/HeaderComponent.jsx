import React, { useState } from "react";
import { Badge, Button, Col, Popover } from "antd";
import {
  WrapperContentPopup,
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
import imageLogo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/slides/UserSlide";
import Loading from "../LoadingComponent/Loading";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };
  const content = (
    <div>
      <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogout}>
        Đăng Xuất
      </WrapperContentPopup>
    </div>
  );
  console.log("user", user);
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(26,148,255)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={6}>
          <WrapperLogoHeader
            src={imageLogo}
            preview={false}
            alt="image-logo"
            width="50px"
            height="50px"
          />
          <WrapperTextHeader>RealStock</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton=" Tìm kiếm"
            placeholder="Nhập sản phẩm muốn tìm kiếm"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "40px", alignItems: "center" }}
        >
          <Loading isPending={loading}>
            <WrapperHeaderAccount>
              <UserOutlined style={{ fontSize: "30px" }} />

              {user?.name ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: "pointer" }}>{user.name}</div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextHeaderSmall>
                    Đăng nhập/Đăng ký
                  </WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall> Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperHeaderAccount>
          </Loading>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
