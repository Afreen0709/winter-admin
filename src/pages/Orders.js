import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Row, Col } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { OrderUserList } from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";
import ExportCSV from "../components/Excelexport";

const Orders = () => {
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  const [searchInput, setSearchInput] = useState("");

  let userId = localStorage.getItem("userId");

  const dispatch = useDispatch();

  const {
    loading: getOrderUserLoading,
    Ordererror: getOrderUserError,
    getOrder: getOrderResponse,
  } = useSelector((state) => state.getOrder);
  console.log(getOrderResponse);

  useEffect(() => {
    dispatch(OrderUserList());
  }, []);

  const columns = [
    {
      title: "#Order Id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => text.slice(-6),
    },
    {
      title: "Name",
      dataIndex: ["user", "firstname"],
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Address",
      dataIndex: ["address", "street"],
      key: "address",
    },
    {
      title: "Start Date",
      dataIndex: "createdAt",
      key: "startDate",
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: "Status",
      dataIndex: "paymentStatus",
      key: "status",
      render: (status) => (
        <Button size="small" className="btn-success button-size text-white"
        >
          {status}
        </Button>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Button
          type="primary"
          size="small"
          onClick={() => handleViewMore(record)}
          className="btn-success button-size"
        >
          View More
        </Button>
      ),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewMore = (record) => {
    setSelectedOrder(record);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const modalContent = (
    <div className="p-5 ">
      <p>
        <strong>Name:</strong> {selectedOrder?.user?.firstname}
      </p>
      <p>
        <strong>Address:</strong> {selectedOrder?.address?.street}
      </p>
      <p>
        <strong>Phone Number:</strong> {selectedOrder?.user?.mobilenumber}
      </p>
      <p className="mb-0">&nbsp;</p>
      {selectedOrder?.products.map((product) => (
        <Row key={product._id} gutter={[16, 16]}>
          <Col span={4}>
            <img
              src={`${product.images[0]}`}
              alt={product.title}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>

          <Col span={12}>
            <p>
              <strong>Title:</strong> {product.name}
            </p>

            <p>
              <strong>Delivery Status:</strong> {selectedOrder.paymentStatus}
            </p>
            <p>
              <strong>Payment Mode:</strong> {selectedOrder.delivery}
            </p>
          </Col>
          <Col span={8}>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>List Price:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  {product.amount}
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>Selling Price:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  {product.offeramount}
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <p className="text-start">
                  <strong>Shipping fee:</strong>
                </p>
              </Col>
              <Col span={12}>
                <p className="text-end">
                  {product.delivery}
                </p>
              </Col>
            </Row>




          </Col>

        </Row>
      ))}
      <Row className="bg-white">
        <Col span={12}>
          <p className="text-start py-3 ps-3">
            <strong>Total Order Amount:</strong>
          </p>
        </Col>
        <Col span={12}>
          <p className="text-end py-3">
            ${selectedOrder?.totalAmount}
          </p>
        </Col>
      </Row>

    </div>
  );

  const filteredProducts = getOrderResponse?.orders?.filter((product) => {
    const nameMatch = product.user.firstname
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    return nameMatch;
  });

  const handleexcel = (item) => {
    console.log(item);

    if (item) {
      const custs = [];
      for (let i = 0; i < item.length; i++) {
        custs[i] = {
          order_id: item[i]?._id,
          name: item[i]?.user.firstname,
          delivery: item[i]?.delivery,
          totalAmount: item[i]?.totalAmount,
          paymentStatus: item[i]?.paymentStatus,
          qty: item[i]?.products.length,
          razorpay_payment_id: item[i]?.razorpay_payment_id,
          isActive: item[i]?.isActive,
          mobilenumber: item[i]?.user.mobilenumber,
          loyalty_point: item[i]?.user.loyalty_point,
          createdAt: item[i]?.createdAt.split("T")[0], // Corrected split method
        };
      }
      console.log(custs, "custs");
      return custs;
    }
    return []; // Return an empty array if item is falsy
  };


  const wscols = filteredProducts
    ? [
      {
        wch: Math.max(...filteredProducts.map((product) => product._id.length+5)),
      },
      {
        wch: Math.max(
          ...filteredProducts.map((product) => (product.user.firstname || "").length+5)
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map((product) => (product.delivery || "").length+5)
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.totalAmount || "").toString().length+5
          )
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.paymentStatus || "").toString().length+5
          )
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.qty || "").toString().length+5
          )
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map((product) => (product.razorpay_payment_id || "").length+5)
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.isActive || "").toString().length
          )
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map((product) => (product.user.mobilenumber || "").length +5)
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.user.loyalty_point || "").length+5
          )
        ),
      },
      {
        wch: Math.max(
          ...filteredProducts.map(
            (product) => (product.createdAt || "").toString().length+5
          )
        ),
      },
    ]
    : [];


  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-color-main">
            <div className="main px-lg-5 px-1 my-lg-5">

              <div className="col-md-6 my-2 col-12">
                <p className="fs-3 fw-semibold text-start col-md-6 col-12">
                  {" "}
                  Order Overview
                </p>
              </div>
              <div className="row col-md-12 d-flex justify-content-between bg-white p-4 m-0">

                <div className="col-md-4 col-12">
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
                <div className="col-md-4 col-12  bg-md-transparent ">
                  {filteredProducts &&

                    <ExportCSV
                      csvData={handleexcel(filteredProducts)}
                      fileName={"Product"}
                      wscols={wscols}
                      headers={[
                        "Order ID",
                        "Name",
                        "Description",
                        "Amount",
                        "Offer Amount",
                        "Quantity",
                        "SKU",
                        "Active",
                        "Language",
                        "Availability",
                        "Created At",
                      ]}
                      headerTitle={[
                        {
                          _id: "Order ID",
                          "user.firstname": "user",
                          delivery: "delivery",
                          totalAmount: "Amount",
                          paymentStatus: "Offer Amount",
                          qty: "Quantity",
                          razorpay_payment_id: "SKU",
                          isActive: "Active",
                          mobilenumber: "Language",
                          loyalty_point: "loyalty point",
                          createdAt: "Created At",
                        },
                      ]}
                    />
                  }
                </div>
              </div>

              {/* <div className="row">
                <div className="col-md-12">
                  <div className="overview mt-3 px-3 py-3 bg-white">
                    <div className="row row-cols-2 row-cols-sm-4 row-cols-md-5 justify-content-center">
                      <div className="text-center mt-2 mb-2">
                        <button className="delete_button">
                          <i className="fa-solid fa-trash-can" /> Delete
                        </button>
                      </div>
                      <div className="text-center mt-2 mb-2">
                        <button className="action_button">
                          <i className="fa-solid fa-list-check" /> Bulk Action
                        </button>
                      </div>
                      <div className="text-end mt-2 mb-2">
                        <button className="action_button">
                          <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                          Export
                        </button>
                      </div>
                      <div className="text-end mt-2 mb-2">
                        <button className="action_button">
                          <i className="fa-solid fa-download" /> Export
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row mx-1">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={getOrderResponse?.orders}
                    columns={columns}
                    pagination={{
                      pageSize: 10, // Set the number of items per page
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal
        title="Order Details"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={800}
        className="card-body rounded "
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default Orders;
