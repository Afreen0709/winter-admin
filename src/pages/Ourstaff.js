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
  DatePicker,
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
  GetstaffListById,
  AddEmployeesById,
  EditEmployeesById,
  DeleteEmployeesById,
} from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";
import { UploadOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";

const { Option } = Select;

const { Dragger } = Upload;

const { confirm } = Modal;

const Ourstaff = () => {
  const pointsArrayKeys = [
    "",
    "Super Admin",
    "Admin",
    "User",
    "Store Manager",
    "Sales Associate",
    "Cashier",
    "Visual Merchandiser",
    "Security Guard",
    "Cleaning Staff",
    "Customer Service Representative",
    "Maintenance Technician",
    "Food Court Staff",
    "Marketing Coordinator",
    "Janitorial Staff",
    "Assistant Manager",
    "Delivery Personnel",
    "IT Support",
    "Event Coordinator",
  ];
  const EditModal = ({ visible, data, onClose, onSave }) => {
    const [fileList, setFileList] = useState([]);
    const [showStoreTiming, setShowStoreTiming] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
      data.joiningDate ? moment(data.joiningDate) : moment()
    );
    const [form] = Form.useForm();

    const handleDateChange = (date, dateString) => {
      setSelectedDate(dateString);

      // Set the value in the form field
      form.setFieldsValue({ joiningDate: dateString });
    };
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
              key !== "_id" && (
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
                  ) : key === "jobRoles" ? (
                    <Select
                      onChange={handleUserTypeChange}
                      placeholder="Select User Type"
                    >
                      <Option value="4">Store Manager</Option>
                      <Option value="5">Sales Associate</Option>
                      <Option value="6">Cashier</Option>
                      <Option value="7">Visual Merchandiser</Option>
                      <Option value="8">Security Guard</Option>
                      <Option value="9">Cleaning Staff</Option>
                      <Option value="10">
                        Customer Service Representative
                      </Option>
                      <Option value="11">Maintenance Technician</Option>
                      <Option value="12">Food Court Staff</Option>
                      <Option value="13">Marketing Coordinator</Option>
                      <Option value="14">Janitorial Staff</Option>
                      <Option value="15">Assistant Manager</Option>
                      <Option value="16">Delivery Personnel</Option>
                      <Option value="17">IT Support</Option>
                      <Option value="18">Event Coordinator</Option>
                      {/* Add more job roles as needed */}
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
                  ) : key === "joiningDate" ? (
                    <>
                      <DatePicker
                        onChange={handleDateChange}
                        defaultValue={moment(selectedDate, "YYYY-MM-DD")}
                        format="YYYY-MM-DD"
                        placeholder="Select Date"
                      />
                      <div style={{ marginTop: 8 }}>
                        {/* Selected Date: {selectedDate || "Not selected"} */}
                      </div>
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

  const { loading: getOrderUserLoading, GetStaffList: getOrderResponse } =
    useSelector((state) => state.GetStaffList);

  const { loading: EditcategoryLoading, addStaffList: EditcategoryResponse } =
    useSelector((state) => state.addStaffList);

  useEffect(() => {
    dispatch(GetstaffListById());
    if (EditcategoryResponse) {
      setEditData([]);
      setEditModalVisible(false);
    }
  }, [EditcategoryResponse]);

  const columns = [
    {
      title: "Emp ID",
      dataIndex: "empId",
      key: "empId",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Location",
    //   dataIndex: "location",
    //   key: "location",
    // },
    {
      title: "joiningDate",
      dataIndex: "joiningDate",
      key: "joiningDate",
      render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
    },
    {
      title: "ROLE",
      dataIndex: "jobRoles",
      key: "jobRoles",
      render: (createdAt) => pointsArrayKeys[createdAt],
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
          className="mx-1 bg-white text-dark"
        >
          <i className="fa-regular fa-pen-to-square px-1" />
        </Button>
        <Button
          type="primary"
          size="small"
          // onClick={() => handleEdit(record)}
          onClick={() => showDeleteConfirm(record)}
          className="mx-1 bg-white text-dark"
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
        dispatch(DeleteEmployeesById(record._id))
          .then(() => dispatch(UserListData(1)))
          .catch((error) => console.error("Error:", error));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleSaveEdit = async (editedData) => {
    console.log(editData);
    let bodypass = "";
    bodypass = {
      firstname: editedData.firstname,
      lastname: editedData.lastname,
      empId: editedData.empId,
      email: editedData.email,
      location: editedData.location,
      joiningDate: editedData.joiningDate,
      jobRoles: editedData.jobRoles,
      // add other fields as needed
    };

    if (editData._id === undefined && editedData._id === undefined) {
      await dispatch(AddEmployeesById(bodypass));
      setEditData([]);
    } else {
      await dispatch(
        editedData._id !== undefined
          ? EditEmployeesById(editedData._id, bodypass)
          : EditEmployeesById(editData._id, bodypass)
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
                <p className="fs-3 fw-semibold my-3">Staff Overview</p>
                  <div className="overview mt-3 px-3 py-3 bg-white">
                    
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
                      <div className="text-md-start text-center mt-2 mb-2">
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

                     
                      <div className="text-md-start text-center mt-2 mb-2">
                        <div
                          className={` button btn add_button  rounded-pill w-75`}
                          onClick={() => {
                            handleEdit({
                              firstname: "",
                              lastname: "",
                              empId: "",
                              email: "",
                              location: "",
                              joiningDate: "",
                              jobRoles: "",
                              // add other fields as needed
                            });
                          }}
                        >
                          Add Staff
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mx-1">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={getOrderResponse?.employees}
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

export default Ourstaff;
