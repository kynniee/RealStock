import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/logo.png";
import { Image } from "antd";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const navigate = useNavigate();

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };
  const handleOnchangeEmail =(value) =>{
    setEmail(value)
  }
  const handleOnchangePassword =(value) =>{
    setPassword(value)
  }
  const handleSignIn = ()=>{
    console.log('sign-in', email, password);
  }
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
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Nhập tài khoản email"
            value={email} onChange= {handleOnchangeEmail} 
          />
          <div style={{ position: "relative" }}>
            <InputForm
              placeholder="Mật khẩu"
              type={isShowPassword ? "text" : "password"}
              value={password} onChange= {handleOnchangePassword} 
            />
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>

          <ButtonComponent
            disabled={!email.length || !password.length}
          onClick={handleSignIn}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng Nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản{" "}
            <WrapperTextLight onClick={handleNavigateSignUp}>
              Tạo tài khoản
            </WrapperTextLight>
          </p>
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
