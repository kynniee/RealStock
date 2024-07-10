import React, { useEffect, useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/UserSlide";
const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");

  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, access_token, rests);
  });

  const dispatch = useDispatch();
  const { data, isPending, isSuccess, isError } = mutation;
  console.log("data", data);

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
    console.log("User state:", user);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    try {
    const res = await UserService.getDetailsUser(id, token);
    console.log("Response from getDetailsUser:", res); // Log phản hồi từ API để xem liệu có dữ liệu name hay không

    // Kiểm tra và xử lý phản hồi từ API
    if (res && res.data && res.data.name) {
      // Cập nhật vào Redux state
      dispatch(updateUser({ ...res.data, access_token: token }));
      console.log("User details updated in Redux state:", res.data); // Log để xem liệu đã cập nhật thành công hay không
    } else {
      console.error("Invalid response or missing name:", res);
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  
  };
}

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
  const handleOnchangeAvatar = (value) => {
    setAvatar(value);
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
    <div style={{ width: "1270px", margin: "0 auto" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>

      <Loading isPending={isPending}>
        <WrapperContentProfile>
          <WrapperInput>
            <WrapperLabel htmlFor="name">Name </WrapperLabel>
            <InputForm
              id={name}
              style={{ width: "500px" }}
              value={name}
              onChange={handleOnchangeName}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1a94ff",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                margin: "10px 0 10px",
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
              style={{ width: "500px" }}
              value={email}
              onChange={handleOnchangeEmail}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1a94ff",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                margin: "10px 0 10px",
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
              style={{ width: "500px" }}
              value={phone}
              onChange={handleOnchangePhone}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1a94ff",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                margin: "10px 0 10px",
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
              style={{ width: "500px" }}
              value={address}
              onChange={handleOnchangeAddress}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1a94ff",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                margin: "10px 0 10px",
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
            <InputForm
              id={avatar}
              style={{ width: "500px" }}
              value={avatar}
              onChange={handleOnchangeAvatar}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                background: "#1a94ff",
                height: "43px",
                width: "200px",
                border: "none",
                borderRadius: "4px",
                margin: "10px 0 10px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
        </WrapperContentProfile>
      </Loading>
    </div>
  );
};

export default ProfilePage;
