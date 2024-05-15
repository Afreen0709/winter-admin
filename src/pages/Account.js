import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Row, Col, Form, Input } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetprofileListById, OrderUserList } from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";

const Account = () => {
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  const formRef = useRef();
  const [form] = Form.useForm();
  let userId = localStorage.getItem("userId");

  const dispatch = useDispatch();

  const {
    loading: getOrderUserLoading,
    Ordererror: getOrderUserError,
    GetProfileList: getOrderResponse,
  } = useSelector((state) => state.GetProfileList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(GetprofileListById(userId));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, [dispatch, userId]);
  
  const handleLogin = (values) => {
    if (values.email && values.password) {
      let body = {
        email: values.email,
        password: values.password,
      };
      // Dispatch the loginUserData action
      // dispatch(LoginUserData(body));
    } else {
      // Handle validation errors or show a message to the user
      console.error("Please enter valid data for registration");
    }
  };

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-color-main">
            <div className="main px-lg-5 my-5">
              <div className="row">
                <p className="fs-3 fw-semibold"> Account Setting</p>

                <div className="col-md-12 row">
                  <div className="col-md-4 bg-white p-4 m-2">
                    {getOrderResponse && getOrderResponse?.User &&<div className="p-3">
                      <Form
                        form={form}
                        initialValues={getOrderResponse?.User}
                        onFinish={handleLogin}
                      >
                        {Object.entries(getOrderResponse?.User).map(
                          ([key, value]) =>
                            key !== "__v" &&
                            key !== "_id" &&  key !== "UserType" && key !=="username" && key !=="verified"&& key !=="lang" && key !=="password" && key !== "loyalty_point" &&(
                              <Form.Item
                                key={key}
                                labelCol={{ span: 24 }}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                name={key}
                                rules={[
                                  {
                                    required: true,
                                    message: `Please enter ${key}`,
                                  },
                                  // Add more validation rules as needed
                                ]}
                              >
                                <Input />
                              </Form.Item>
                            )
                        )}
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="button pb-2 text-center h-25"
                          >
                            Update
                          </Button>
                        </Form.Item>
                      </Form>
                    </div> }
                    
                  </div>
                  <div className="col-md-6 bg-white p-4 m-2 h-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
