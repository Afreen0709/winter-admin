import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
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
    Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    GetBrandUserById,
    AddEventById,
    EditEventById,
    fetchStoreCategory,
    DeleteEventById,
    GetEventListById,
} from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";
import { DeleteFilled } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { confirm } = Modal;
const { Option } = Select;
const Events = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const { loading: getcategoriesLoading, storelist: getcategoriesResponse } =
        useSelector((state) => state.storelist);

    const EditModal = ({ visible, data, onClose, onSave }) => {
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

        return (
            <Modal
                title="Add Events"
                width={"800px"}
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
                <Form form={form} initialValues={data} className="col-md-12 row">
                    {Object.entries(data).map(
                        ([key, value]) =>
                            !["_id", , "createdAt", "__v", "lang","createdBy","category_id"].includes(
                                key
                            ) && (
                                <Form.Item
                                    key={key}
                                    labelCol={{ span: 24 }}
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                    name={key}
                                    className="col-md-6"
                                >
                                    {key === "isActive" ? (
                                        <Switch
                                            size="small"
                                            checked={value}
                                            onChange={(checked) =>
                                                form.setFieldsValue({ [key]: checked })
                                            }
                                        />
                                    )  : key === "imageUrl" ? (
                                        <CustomImageUpload value={value} form={form} />

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

    const CustomImageUpload = ({ value, form }) => {
        const [selectedFiles, setSelectedFiles] = useState(
          value !== "" ? [value] : []
        );
    
        const handleFileChange = ({ fileList }) => {
          if (fileList.length === 0) {
            form.setFieldsValue({
              imageUrl: null,
            });
          } else {
            const selectedFile = fileList[0]?.originFileObj;
    
            console.log("Selected File:", selectedFile);
    
            const imageUrl = selectedFile
              ? URL.createObjectURL(selectedFile)
              : `${value}`;
              console.log(imageUrl,"imageUrl");
    
            form.setFieldsValue({ imageUrl });
            setSelectedFiles(fileList);
          }
    
          // Automatically close the modal after uploading
          if (fileList.length > 0) {
            form.submit();
          }
        };
    
        const handleClearImage = () => {
          setSelectedFiles([]);
          form.setFieldsValue({
            imageUrl: null,
          });
        };
    
        useEffect(() => {
          form.setFieldsValue({
            imageUrl: selectedFiles.map((file) => file.originFileObj),
          });
        }, [selectedFiles]);
    
        return (
          <div>
            <Upload
              accept="image/*"
              fileList={selectedFiles}
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => {
                  onSuccess("ok");
                }, 0);
              }}
              onChange={({ fileList }) => {
                handleFileChange({ fileList });
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Images</Button>
            </Upload>
            {selectedFiles.length > 0 && (
              <div style={{ marginTop: 16 }}>
                {selectedFiles.map((file, index) => (
                  <img
                    key={index}
                    src={
                      file?.originFileObj
                        ? URL.createObjectURL(file.originFileObj)
                        : `${file}`
                    }
                    alt={`Preview-${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      marginRight: "5px",
                    }}
                  />
                ))}
                {/* <Button onClick={handleClearImage}>Clear Image</Button> */}
              </div>
            )}
          </div>
        );
      };
    

    document.title = "Winter Bear";
    document.getElementsByTagName("META")[2].content = "Winter Bear";
    const dispatch = useDispatch();
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editData, setEditData] = useState([]);

    const { loading: getOrderUserLoading, GetEventList: getOrderResponse } =
        useSelector((state) => state.GetEventList);

    const { loading: EditcategoryLoading, AddEventsList: EditcategoryResponse } =
        useSelector((state) => state.AddEventsList);

    const handleToggleActive = (productId, newStatus) => {
        // Implement logic to update the isActive status for the product with productId
        // You may need to dispatch an action to update the state or make an API call
        console.log(`Toggle Active for Product ${productId} to ${newStatus}`);
    };

    useEffect(() => {
        dispatch(GetEventListById());

        if (EditcategoryResponse) {
            setEditData([]);
            setEditModalVisible(false);
        }
    }, [EditcategoryResponse]);

    const columns = [
        {
            title: "Event Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Image",
            dataIndex: "imageUrl",
            key: "imageUrl",
            render: (imageUrl) => (
                <img
                    src={`${imageUrl}`}
                    alt="Product Image"
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                />
            ),
        },
        {
            title: "Active",
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive, record) => (
                <Switch
                    checked={isActive}
                    size="small"
                    onChange={() => handleToggleActive(record._id, !isActive)}
                />
            ),
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
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
                dispatch(DeleteEventById(record._id))
                    .then(() => dispatch(GetBrandUserById()))
                    .catch((error) => console.error("Error:", error));
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleViewMore = (record) => {
        setSelectedOrder(record);
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    // ...

    const handleEdit = (record) => {
        setEditData(record);
        setEditModalVisible(true);
    };

    const handleSaveEdit = (editedData) => {
        const formData = new FormData();
        formData.append("name", editedData.name);
        formData.append("description", editedData.description);
        formData.append("createdBy", localStorage.getItem("userId"));
        formData.append("lang", "IND");
        formData.append("imageFile", editedData.imageUrl[0]);
        console.log("Form Data:", formData);

        if (editData._id) {
            dispatch(EditEventById(editData._id, formData));
        } else {
            dispatch(AddEventById(formData));
        }

        console.log("Edited Data:", editedData);
    };

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10 bg-color-main">
                        <div className="main px-lg-5 my-5">
                            <div className="col-md-6 my-2 col-12">
                                <p className="fs-3 fw-semibold text-start col-md-6 col-12">
                                    {" "}
                                    Add Event
                                </p>
                            </div>
                            <div className="row col-md-12 d-flex justify-content-between bg-white p-4 m-0">

                                <div className="col-md-4">
                                    <form
                                        className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                                        role="search"
                                    >
                                        <div className="input-group flex-nowrap bg-secondary-subtle  rounded-pill">
                                            <span
                                                className="input-group-text border-0 bg-secondary-subtle rounded-pill"
                                                id="addon-wrapping"
                                            >
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-secondary-subtle text-secondary rounded-pill"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-5 col-12   bg-md-transparent ">
                                    {/* <div className="text-dark  mt-0 text-center text-md-center ">
                    <div className="text-center text-md-center ">
                      <button className="action_button">
                        <i className="fa-solid fa-download" /> Export

                      </button>
                    </div>

                  </div> */}

                                </div>
                                <div className="col-md-3 text-end ">
                                    <Link
                                        className={` button btn add_button  rounded-pill`}
                                        onClick={() =>
                                            handleEdit({
                                                "name": "",
                                                "description": "",
                                                "imageUrl": "",
                                                "isActive": true,
                                                "createdBy": "",
                                                "lang": "IND",
                                            }
                                            )
                                        }                    >
                                        <i className="fa-solid fa-plus px-1" />
                                        Add Events
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 ">

                                    <div className="row mx-1">
                                        <div className="table-responsive py-3 bg-white mt-3">
                                            <Table
                                                dataSource={getOrderResponse?.events}
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
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Events;
