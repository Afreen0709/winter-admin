import React, { useState, useRef, useEffect } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import Google from "../constant/images/google.svg";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserData } from "./../reducer/thunks"; // Import the CreateUserData action

const LoginModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const formRef = useRef();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setLoginData((prevData) => ({ ...prevData, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setLoginData((prevData) => ({ ...prevData, password: e.target.value }));
  };

  const {
    loading: loginUserLoading,
    loginerror: loginUserError,
    loginData: loginUserResponse,
  } = useSelector((state) => state.loginData);

  // Listen for changes in the registration response
  useEffect(() => {
    if (loginUserResponse) {
      message.success("Success", 5); // Display success message for 5 seconds
      console.log(loginUserResponse);
      localStorage.setItem("userId", loginUserResponse.userId);
      onClose();
      window.location.reload();
      window.location.href = "/";
    }
    if (loginUserError) {
      message.error(loginUserError, 5); // Display error message for 5 seconds
    }
  }, [loginUserResponse, loginUserError]);

  const handleLogin = (values) => {
    if (values.email && values.password) {
      let body = {
        email: values.email,
        password: values.password,
      };
      // Dispatch the loginUserData action
      dispatch(LoginUserData(body));
    } else {
      // Handle validation errors or show a message to the user
      console.error("Please enter valid data for registration");
    }
  };

  return (
    <div className="p-3">
      <h4 className="text-center font-weight-bold head-control mt-4">Admin Login</h4>
      <Form requiredMark={false} onFinish={handleLogin} ref={formRef} initialValues={loginData}>
        <Form.Item
          name="email"
          label="Email"
          
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input
            className="form-control text-input"
            placeholder="Email"
            value={loginData.email}
            onChange={handleEmailChange}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input
            className="form-control text-input custom-password-input"
            placeholder="Password"
            value={loginData.password}
            onChange={handlePasswordChange}
            style={{ backgroundColor: "transparent" }}
          />
        </Form.Item>

        <div className="mb-3">
          <p className="text-start p-texts mb-4 mt-2">Forgot Password ?</p>
        </div>

        <div className="d-flex justify-content-center pt-2">
          <Button
            type="primary"
            className="btn button w-75 h-25"
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginModal;
