import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
  WrapperUploadFile,
} from "./style";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/UserSlide";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });

  const dispatch = useDispatch();
  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangeName = (value) => {
    setName(value);
  };
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };
  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
  };
  return (
    <div style={{ width: "1280px", margin: "10px auto", height: "500px"}}>
      <Loading isPending={isPending}>
        <WrapperContentProfile>
      <WrapperHeader style={{ color: '#1791c8'}} >Thông tin người dùng</WrapperHeader>
        <WrapperInput>
            <WrapperLabel htmlFor="name">Name </WrapperLabel>
            <InputForm
              id={name}
              style={{ width: "500px", height: '40px' }}
              value={name}
              onChange={handleOnchangeName}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1791c8",
                height: "42px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                // margin: "10px 0 10px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="email">Email </WrapperLabel>
            <InputForm
              id={email}
              style={{ width: "500px", height: '40px'  }}
              value={email}
              onChange={handleOnchangeEmail}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1791c8",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
              
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="phone">Phone </WrapperLabel>
            <InputForm
              id={phone}
              style={{ width: "500px" , height: '40px' }}
              value={phone}
              onChange={handleOnchangePhone}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1791c8",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",

              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="address">Address </WrapperLabel>
            <InputForm
              id={address}
              style={{ width: "500px", height: '40px'  }}
              value={address}
              onChange={handleOnchangeAddress}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1791c8",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="avatar">Avatar </WrapperLabel>
            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </WrapperUploadFile>
            {avatar && (
              <img src={avatar} style={{
                height: '60px',
                width: '60px',
                borderRadius:'50%',
                objectFit:'cover'
              }}alt="avatar"/>
            )}
            {/* <InputForm
              id={avatar}
              style={{ width: "500px" }}
              value={avatar}
              onChange={handleOnchangeAvatar}
            /> */}
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1791c8",
                height: "40px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "500"
              }}
            ></ButtonComponent>
          </WrapperInput>
        </WrapperContentProfile>
      </Loading>
    </div>
  );
};

export default ProfilePage;
