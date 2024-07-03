import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/logo.png";
import { Image } from "antd";
import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin Chào</h1>
          <p>Đăng nhập và tạo tài khoản </p>
          <InputForm style={{marginBottom: '10px' }} placeholder= "abc@gmail.com" />
          <div style={{ position: 'relative' }}>
      <InputForm placeholder="Mật khẩu" type={isShowPassword ? 'text' : 'password'}/>
      <span style={{ zIndex: 10, position: 'absolute', top: '4px',right: '8px' }}onClick={() => setIsShowPassword(!isShowPassword)}>
        {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
      </span>
    </div>

          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: '4px',
              margin: '26px 0 10px',
            }}
            textButton={"Đăng Nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
            <p>Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại RealStock </h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
