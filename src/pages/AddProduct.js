import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const AddProduct = () => {
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-light">
            <div className="main px-3 my-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-3 fw-semibold">Product</p>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="overview mt-3   bg-white">
                        <div className="form">
                          
                            <div className="row d-flex justify-content-center">
                              <div className=" col-lg-12  text-center">
                                <div className="card">
                                  <p className="fs-4 cmfont text-start py-3 mb-3 px-3">
                                    Add Your Product
                                  </p>
                                  <form
                                    className="form-card mb-3"
                                    onsubmit="event.preventDefault()"
                                  >
                                    <div className="row justify-content-between text-left px-3">
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Title
                                        </label>
                                        <input
                                          type="text"
                                          id="title"
                                          name="title"
                                          placeholder=""
                                          onblur="validate(1)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Slug
                                        </label>
                                        <input
                                          type="text"
                                          id="lname"
                                          name="lname"
                                          placeholder=""
                                          onblur="validate(2)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Amount
                                        </label>
                                        <input
                                          type="text"
                                          id="amount"
                                          name="amount"
                                          placeholder=""
                                          onblur="validate(3)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Offer Amount
                                        </label>
                                        <input
                                          type="text"
                                          id="offer_amount"
                                          name="offer_amount"
                                          placeholder=""
                                          onblur="validate(4)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Color
                                        </label>
                                        <input
                                          type="text"
                                          id="color"
                                          name="color"
                                          placeholder=""
                                          onblur="validate(4)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                        Dimesion
                                        </label>
                                        <input
                                          type="text"
                                          id="dimesion"
                                          name="dimesion"
                                          placeholder=""
                                          onblur="validate(4)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                        SKU
                                        </label>
                                        <input
                                          type="text"
                                          id="sku"
                                          name="sku"
                                          placeholder=""
                                          onblur="validate(4)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                        avaiablity
                                        </label>
                                        <input
                                          type="text"
                                          id="avaiablity"
                                          name="avaiablity"
                                          placeholder=""
                                          onblur="validate(4)"
                                          className="form-control input"
                                        />
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                        Brand 
                                        </label>
                                        <select className="form-control input">
                                          <option>Brand A</option>
                                          <option>Brand B</option>
                                          <option>Brand V</option>
                                        </select>
                                       
                                      </div>
                                      <div className="form-group col-sm-3 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                        Language
                                        </label>
                                        <select className="form-control input">
                                          <option>English</option>
                                          <option>Englsih</option>
                                          <option>English</option>
                                        </select>
                                       
                                      </div>
                                      <div className="form-group col-12 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Details
                                        </label>
                                        <textarea
                                          id="details"
                                          name="job"
                                          placeholder=""
                                          onblur="validate(5)"
                                          rows="3"
                                          className="form-control input"
                                        >
                                          {" "}
                                        </textarea>
                                      </div>
                                      <div className="form-group col-12 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Status
                                        </label>
                                        <select className="form-control input">
                                          <option>Active</option>
                                          <option>De-Active</option>
                                        
                                        </select>
                                      </div>
                                      <div className="form-group col-12 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Image
                                        </label>
                                        <input type="file" />
                                       
                                      </div>
                                    </div>
                                  
                                    <div className="text-start mb-3 px-3  ">
                                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                                    <button type="submit" className="mx-3 btn btn-danger btn-sm">Back</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
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

export default AddProduct;
