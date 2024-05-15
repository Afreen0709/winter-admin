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
  AdminUserLists,
} from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

const { Dragger } = Upload;

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
        footer={[
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} initialValues={data}>
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

  const { loading: getOrderUserLoading, GetStorelist: getOrderResponse } =
    useSelector((state) => state.GetStorelist);

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

  useEffect(() => {
    dispatch(AdminUserLists(1));
    if (EditcategoryResponse) {
      setEditData([]);
      setEditModalVisible(false);
    }
  }, [EditcategoryResponse]);

  const columns = [
    {
      title: "First Name",
      dataIndex: ["admin_id", "firstname"],
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: ["admin_id", "lastname"],
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: ["admin_id", "email"],
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: ["admin_id", "mobilenumber"],
      key: "mobilenumber",
    },
    {
      title: "User Name",
      dataIndex: ["admin_id", "username"],
      key: "username",
    },
    {
      title: "Lang",
      dataIndex: ["admin_id", "lang"],
      key: "lang",
    },
    {
      title: "Status",
      dataIndex: ["admin_id", "verified"],
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
        {console.log(record)}
          <Button type="primary" size="small" onClick={() => handleEdit(record.admin_id)}>
            Edit
          </Button>
          <Button type="primary" size="small" onClick={() => handleEdit(record.admin_id)}>
            Delete
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
          <div className="col-md-10 bg-light">
            <div className="main px-5 my-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-3 px-3 fw-semibold"> Our Store</p>
                </div>
              </div>
              <div
                className="btn add_button"
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
                Add Store
              </div>

              <div className="row">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={getOrderResponse?.admins}
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
