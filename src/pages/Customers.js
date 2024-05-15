import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Row,
  Col,
  Switch,
  Form,
  Input,
  Upload,
  TimePicker,
  Select,
} from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  UserListData,
  EditProductUserData,
  AddProductData,
  CreateUserData,
  EditUserData,
  DeleteUserData,
} from "../reducer/thunks";
import moment from "moment";
import { Link } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";

import constant from "../constant/constant";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

const { Dragger } = Upload;

const { confirm } = Modal;

const Customers = () => {
  const EditModal = ({ visible, data, onClose, onSave }) => {
    const [fileList, setFileList] = useState([]);
    const [showStoreTiming, setShowStoreTiming] = useState(false);

    const [form] = Form.useForm();

    const handleSave = () => {
      form
        .validateFields()
        .then((values) => {
          onSave(values);
          form.resetFields();
          onClose();
        })
        .catch((errorInfo) => {
          console.log("Validation Failed:", errorInfo);
        });
    };

    const handleFileChange = (info) => {
      setFileList(info.fileList.slice(-1)); // Allow only one file
    };

    const handleUserTypeChange = (userType) => {
      setShowStoreTiming(userType === "2"); // Show store timing only for user type 2 (admin)
    };

    const handleUser = (bool, key) => {
      if (!bool) {
        return (
          key !== "storename" &&
          key !== "storeaddress" &&
          key !== "storetimming" &&
          key !== "lat" &&
          key !== "log"
        );
      } else {
        return true;
      }
    };

    return (
      <Modal
        title="Add Customers"
        visible={visible}
        onCancel={onClose}
        width={"800px"}
        footer={[
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} initialValues={data} className="col-md-12 row">
          {Object.entries(data).map(
            ([key, value]) =>
              key !== "__v" &&
              key !== "_id" &&
              handleUser(showStoreTiming, key) && (
                <Form.Item
                  key={key}
                  labelCol={{ span: 24 }}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                  className="col-md-4"
                >
                  {key === "isActive" ? (
                    <Switch
                      size="small"
                      checked={value}
                      onChange={(checked) => {
                        form.setFieldsValue({ [key]: checked });
                      }}
                    />
                  ) : key === "UserType" ? (
                    <Select
                      onChange={handleUserTypeChange}
                      placeholder="Select User Type"
                    >
                      <Option value="1">Super Admin</Option>
                      <Option value="2">Admin</Option>
                      <Option value="3">User</Option>
                    </Select>
                  ) : key === "images" ? (
                    <Upload.Dragger
                      name="file"
                      multiple={false}
                      beforeUpload={() => false}
                      showUploadList={false}
                      fileList={fileList}
                      onChange={handleFileChange}
                    >
                      <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag image to this area to upload
                      </p>
                    </Upload.Dragger>
                  ) : key === "lang" ? (
                    <Select
                      onChange={handleUserTypeChange}
                      placeholder="Select User Type"
                    >
                      <Option value="IND">India</Option>
                      <Option value="JPN">Japan</Option>
                      <Option value="KOR">Korea</Option>
                      <Option value="AUS">Australia</Option>
                    </Select>
                  ) : key === "verified" ? (
                    <Select placeholder="Select verified">
                      <Option value={true}>true</Option>
                      <Option value={false}>false</Option>
                    </Select>
                  ) : key === "storetimming" && showStoreTiming ? (
                    <>
                      {Object.entries(value).map(([day, time]) => {
                        // Extract start and end times from the provided string
                        const [startTime, endTime] = time.split(" – "); // Make sure to use an en dash (–) character

                        return (
                          <div key={day} className="row">
                            <Form.Item
                              label={`${day} - Start Time:`}
                              name={`storetimming.${day}.start`}
                              style={{ marginRight: "10px" }}
                            >
                              <TimePicker
                                format="hh:mm A"
                                defaultValue={moment(startTime, "hh:mm A")}
                              />
                            </Form.Item>
                            <Form.Item
                              label={`${day} - End Time:`}
                              name={`storetimming.${day}.end`}
                            >
                              <TimePicker
                                format="hh:mm A"
                                defaultValue={moment(endTime, "hh:mm A")}
                              />
                            </Form.Item>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              )
          )}
        </Form>
      </Modal>
    );
  };

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState([]);

  const { loading: getOrderUserLoading, getUserDatalist: getOrderResponse } =
    useSelector((state) => state.getUserDatalist);

  const { loading: EditcategoryLoading, createData: EditcategoryResponse } =
    useSelector((state) => state.createData);

  const handleToggleActive = async (productId, newStatus, updated) => {
    console.log(
      `Toggle Active for Product ${productId} to ${newStatus} to ${updated}`
    );
    updated.verified = newStatus; // Update isActive property directly
    updated._id = productId; // Update isActive property directly
    console.log(updated, "updated");
    handleSaveEdit(updated);
    // Implement logic to update the isActive status for the product with productId
    // You may need to dispatch an action to update the state or make an API call
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <DeleteFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        dispatch(DeleteUserData(record._id))
          .then(() => dispatch(UserListData(1)))
          .catch((error) => console.error("Error:", error));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    dispatch(UserListData(1));
    if (EditcategoryResponse) {
      setEditData([]);
      setEditModalVisible(false);
    }
  }, [EditcategoryResponse]);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Phone Number",
      dataIndex: "mobilenumber",
      key: "mobilenumber",
    },
    // {
    //   title: "User Name",
    //   dataIndex: "username",
    //   key: "username",
    // },
    {
      title: "Lang",
      dataIndex: "lang",
      key: "lang",
    },

    {
      title: "Status",
      dataIndex: "verified",
      key: "verified",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          size="small"
          onChange={() => handleToggleActive(record._id, !isActive, record)}
        />
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <>
          <Button
            type="primary"
            size="small"
            onClick={() => handleEdit(record)}
            className="mx-1 bg-white text-dark shadow-none"
          >
            <i className="fa-regular fa-pen-to-square px-1" />
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => showDeleteConfirm(record)}
            className="mx-1 bg-white text-dark shadow-none"
          >
            {" "}
            <i className="fa-solid fa-trash-can px-1" />
          </Button>
        </>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditData(record);
    setEditModalVisible(true);
  };

  const handleSaveEdit = async (editedData) => {
    console.log(editData);
    let bodypass = "";
    bodypass = {
      firstname: editedData.firstname,
      lastname: editedData.lastname,
      mobilenumber: editedData.mobilenumber,
      email: editedData.email,
      password: editedData.password,
      UserType: editedData.UserType,
      lang: editedData.lang,
      verified: editedData.verified, //Japan: JPN ,Korea: KOR ,India: IND ,Australia: AUS
      // storename: editedData.storename,
      // storeaddress: editedData.storeaddress,
      // storetimming: {
      //   Mo: "11:00am – 10:00pm",
      //   Tu: "11:00am – 10:00pm",
      //   We: "11:00am – 10:00pm",
      //   Th: "11:00am – 10:00pm",
      //   Fr: "11:00am – 10:00pm",
      //   Sa: "11:00am – 10:00pm",
      //   Su: "11:00am – 10:00pm",
      // },
      // lat: editedData.lat,
      // log: editedData.log,
    };
    // const formData = new FormData();

    // Object.entries(bodypass).forEach(([key, value]) => {
    //   if (key === "storetimming") {
    //     // Handle storetimming separately if needed
    //     Object.entries(value).forEach(([day, time]) => {
    //       formData.append(`storetimming.${day}.start`, time.start);
    //       formData.append(`storetimming.${day}.end`, time.end);
    //     });
    //   } else {
    //     formData.append(key, value);
    //   }
    // });

    // await dispatch(
    //   EditProductUserData(
    //     editedData._id === undefined ? editData._id : editedData._id,
    //     bodypass
    //   )
    // );

    if (editData._id === undefined && editedData._id === undefined) {
      await dispatch(CreateUserData(bodypass));
      setEditData([]);
    } else {
      await dispatch(
        editedData._id !== undefined
          ? EditUserData(editedData._id, bodypass)
          : EditUserData(editData._id, bodypass)
      );
      setEditData([]);
    }

    // dispatch(UserListData(1));

    // Handle the edited data (e.g., dispatch an action to update the data)
    console.log("Edited Data:", bodypass);
  };

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-color-main">
            <div className="main px-lg-5 my-lg-5">
              <div className="row g-0">
                <div className="col-md-12">
                <p className="fs-3 fw-semibold my-3">
                    Customer Overview
                    </p>
                  <div className="overview mt-3 px-3 py-3 bg-white">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
                    <div className="text-center mt-2 mb-2 text-md-end pe-md-5">
                        <div className="input-group flex-nowrap bg-secondary-subtle  rounded-pill">
                          <input
                            type="text"
                            className="form-control border-0 bg-secondary-subtle text-secondary  rounded-pill"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="addon-wrapping"
                          />
                          <span
                            className="input-group-text border-0 bg-secondary-subtle  rounded-pill"
                            id="addon-wrapping"
                          >
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </span>
                        </div>
                      </div>
                    

                      <div className="text-center text-md-end mt-2 mb-2">
                        <Link
                          className={` button btn add_button  rounded-pill`}
                          onClick={() => {
                            handleEdit({
                              firstname: "",
                              lastname: "",
                              mobilenumber: "",
                              email: "",
                              password: "",
                              UserType: "",
                              lang: "", //Japan: JPN ,Korea: KOR ,India: IND ,Australia: AUS
                              storename: "",
                              storeaddress: "",
                              storetimming: {
                                Mo: "11:00am – 10:00pm",
                                Tu: "11:00am – 10:00pm",
                                We: "11:00am – 10:00pm",
                                Th: "11:00am – 10:00pm",
                                Fr: "11:00am – 10:00pm",
                                Sa: "11:00am – 10:00pm",
                                Su: "11:00am – 10:00pm",
                              },
                              lat: "",
                              log: "",
                            });
                          }}
                        >
                          <i className="fa-solid fa-plus px-2" />
                          Add Customers
                        </Link>
                      </div>

                     
                   
                    </div>
                    
                  </div>
                </div>
              </div>

             

              <div className="row mx-1">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={getOrderResponse?.users}
                    columns={columns}
                    pagination={{
                      pageSize: 10, // Set the number of items per page
                    }}
                  />
                </div>
              </div>
              <EditModal
                visible={editModalVisible}
                data={editData}
                onClose={() => setEditModalVisible(false)}
                onSave={handleSaveEdit}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Customers;
