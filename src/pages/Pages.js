import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Banners from "../components/Home/Banner";

const Pages = () => {
  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  return (
    <>
      <Header />

      <div className="container-fluid bg-white pages">
        <div className="row">
          <Sidebar />

          <div className="col-md-10 bg-light px-md-4 my-md-4 px-3 py-3">
            <div className="row">
              <div className="col-12">
              <p className="fs-3 fw-semibold py-3">
                    Pages
                    </p>
              </div>
              <div className="col-lg-3 bg-light">
                <div
                  className="nav flex-column nav-pills   "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link accBtn bg-transparent w-100  "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <div className="row  bg-white ">
                      <div className="col-8 ">
                        <p className="my-3 text-dark  bg-white px-3 text-start">
                          Home
                        </p>
                      </div>
                      <div className="col-4 bg-white  py-3 ">
                        <div class="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                        </div>
                      </div>
                      
                    </div>
                  </button>

                  <button
                    className="nav-link accBtn bg-transparent w-100"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <div className="row  bg-white ">
                      <div className="col-8 ">
                        <p className="my-3 text-dark  bg-white px-3 text-start">
                          About{" "}
                        </p>
                      </div>
                      <div className="col-4 bg-white  py-3 ">
                        <div class="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                        </div>
                      </div>
                      
                    </div>
                  </button>

                  <button
                    className="nav-link accBtn bg-transparent w-100"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <div className="row  bg-white ">
                      <div className="col-8 ">
                        <p className="my-3 text-dark  bg-white px-3 text-start">
                          Faq's{" "}
                        </p>
                      </div>
                      <div className="col-4 bg-white  py-3 ">
                        <div class="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                        </div>
                      </div>
                      
                    </div>
                  </button>
                  <button
                    className="nav-link accBtn bg-transparent"
                    id="v-pills-messages1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <div className="row  bg-white ">
                      <div className="col-8 ">
                        <p className="my-3 text-dark  bg-white px-3 text-start">
                          Events{" "}
                        </p>
                      </div>
                      <div className="col-4 bg-white  py-3 ">
                        <div class="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                        </div>
                      </div>
                      
                    </div>
                  </button>
                </div>
              </div>
              <div className=" col-lg-9 col-12">
                <Banners />
              </div>
            </div>
          </div>
          {/*
          <div className="col-md-10 bg-light">
            <div className="main px-3 my-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-3 fw-semibold">Pages</p>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="overview    ">
                        <div className="row   mb-3">
                          <div className="col-8 bg-white">
                            <p className="mb-0  py-3  bg-white px-3">Home </p>
                          </div>
                          <div className="col-4 bg-white  py-3 ">
                            <div class="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked
                              />
                            </div>
                          </div>
                          <div className="col-2 bg-light py-3">
                            <button className="border-0 bg-transparent">
                              <i className="fa-solid fa-trash-can" />
                            </button>
                          </div>
                        </div>
                        <div className="row   mb-3">
                          <div className="col-8 bg-white">
                            <p className="mb-0  py-3  bg-white px-3">About </p>
                          </div>
                          <div className="col-4 bg-white  py-3 ">
                            <div class="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked
                              />
                            </div>
                          </div>
                          <div className="col-2 bg-light py-3">
                            <button className="border-0 bg-transparent">
                              <i className="fa-solid fa-trash-can" />
                            </button>
                          </div>
                        </div>
                        <div className="row   mb-3">
                          <div className="col-8 bg-white">
                            <p className="mb-0  py-3  bg-white px-3">Faq's </p>
                          </div>
                          <div className="col-4 bg-white  py-3 ">
                            <div class="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked
                              />
                            </div>
                          </div>
                          <div className="col-2 bg-light py-3">
                            <button className="border-0 bg-transparent">
                              <i className="fa-solid fa-trash-can" />
                            </button>
                          </div>
                        </div>
                        <div className="row   mb-3">
                          <div className="col-8 bg-white">
                            <p className="mb-0  py-3  bg-white px-3">Events </p>
                          </div>
                          <div className="col-4 bg-white  py-3 ">
                            <div class="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked
                              />
                            </div>
                          </div>
                          <div className="col-2 bg-light py-3">
                            <button className="border-0 bg-transparent">
                              <i className="fa-solid fa-trash-can" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 col-md-7 bg-white">
                      <div className="overview mt-3   ">
                        <div className="row  px-3 my-3 bg-light mx-3">
                          <div className="col-8 px-3">
                            <p className="bg-light py-3 mb-0 ps-5">Banner </p>
                          </div>
                          <div className="col-2 col-md-3 bg-light py-2 text-end">
                            <button
                              className="border-0 bg-main text-white  rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#Banner"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                        <div className="row  px-3 my-3 bg-light mx-3">
                          <div className="col-8 px-3">
                            <p className="bg-light py-3 mb-0 ps-5">Gallery </p>
                          </div>

                          <div className="col-2 col-md-3 bg-light py-2 text-end">
                            <button
                              className="border-0 bg-main text-white  rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#Gallery"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div
        className="modal fade"
        id="Banner"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-light bg-light ">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div className="modal-body">
              <p className="fs-2 text-center"> Banner</p>
              <div className="row">
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
              </div>
              <div className="row my-3">
                <div class="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                  <label className="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>

              <div className="row text-center">
                <div className="text-center mb-3 px-3  ">
                <a
                    href="#"
                    type="submit"
                    className="btn  action_button  rounded-pill btn-sm mx-2"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="mx-3 btn bg-main rounded-pill  text-white btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Gallery"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-light">
          <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div className="modal-body">
              <p className="fs-3 text-center"> Gallery</p>
              <div className="row">
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
              </div>
              <div className="row my-3">
                <div class="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                  <label className="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>

              <div className="row text-center d-inline">
                <div className="text-center mb-3   ">
                <a
                    href="#"
                    type="submit"
                    className="btn  action_button  rounded-pill btn-sm mx-2"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="mx-3 btn bg-main rounded-pill  text-white btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="About"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-light">
          <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div className="modal-body">
              <p className="fs-3 text-center"> About</p>

              <div className="row my-3">
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control input"
                    id="inputGroupFile02"
                    placeholder="Title"
                  />
                  
                </div>
              </div>
              <div className="row my-3">
                <div class="input-group">
                  <textarea
                    row="3"
                    className="form-control input"
                    id="inputGroupFile02"
                    placeholder="About"
                  />
                </div>
              </div>

              <div className="row text-center">
                <div className="text-center mb-3 px-3  ">
                <a
                    href="#"
                    type="submit"
                    className="btn  action_button  rounded-pill btn-sm mx-2"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="mx-3 btn bg-main rounded-pill  text-white btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Faqs"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content bg-light bg-light">
          <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div
              className="modal-body my-3 px-3 "
              style={{ height: "450px", overflowX: "hidden" }}
            >
              <div className="row my-3">
                <div class="col-10">
                  <p className="py-2 fw-bold">
                    {" "}
                    1. Are these products authentic?
                  </p>
                  <p className="mb-3">
                    Of course! We have teamed up with LINE FRIENDS to start
                    pop-up stores across India, bringing official BT21 and LINE
                    FRIENDS products to India for the first time ever.
                  </p>
                </div>
                <div className="col-1 px-1 py-1 ">
                  <div className="row py-2 px-2">
                    <div className="col-6 bg-success text-white py-1 ">
                      <a className="text-white" href="#">
                        <i className="fa-solid fa-trash-can" />
                      </a>
                    </div>
                    <div className="col-6 bg-success text-white  py-1 ">
                      <a
                        className="border-0  text-white  rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#AddFAQ"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div class="col-10">
                  <p className="py-2 fw-bold">
                    {" "}
                    1. Are these products authentic?
                  </p>
                  <p className="mb-3">
                    Of course! We have teamed up with LINE FRIENDS to start
                    pop-up stores across India, bringing official BT21 and LINE
                    FRIENDS products to India for the first time ever.
                  </p>
                </div>
                <div className="col-1 px-1 py-1 ">
                  <div className="row py-2 px-2">
                    <div className="col-6 bg-success text-white py-1 ">
                      <a className="text-white" href="#">
                        <i className="fa-solid fa-trash-can" />
                      </a>
                    </div>
                    <div className="col-6 bg-success text-white  py-1 ">
                      <a
                        className="border-0  text-white  rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#AddFAQ"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div class="col-10">
                  <p className="py-2 fw-bold">
                    {" "}
                    1. Are these products authentic?
                  </p>
                  <p className="mb-3">
                    Of course! We have teamed up with LINE FRIENDS to start
                    pop-up stores across India, bringing official BT21 and LINE
                    FRIENDS products to India for the first time ever.
                  </p>
                </div>
                <div className="col-1 px-1 py-1 ">
                  <div className="row py-2 px-2">
                    <div className="col-6 bg-success text-white py-1 ">
                      <a className="text-white" href="#">
                        <i className="fa-solid fa-trash-can" />
                      </a>
                    </div>
                    <div className="col-6 bg-success text-white  py-1 ">
                      <a
                        className="border-0  text-white  rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#AddFAQ"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div class="col-10">
                  <p className="py-2 fw-bold">
                    {" "}
                    1. Are these products authentic?
                  </p>
                  <p className="mb-3">
                    Of course! We have teamed up with LINE FRIENDS to start
                    pop-up stores across India, bringing official BT21 and LINE
                    FRIENDS products to India for the first time ever.
                  </p>
                </div>
                <div className="col-1 px-1 py-1 ">
                  <div className="row py-2 px-2">
                    <div className="col-6 bg-success text-white py-1 ">
                      <a className="text-white" href="#">
                        <i className="fa-solid fa-trash-can" />
                      </a>
                    </div>
                    <div className="col-6 bg-success text-white  py-1 ">
                      <a
                        className="border-0  text-white  rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#AddFAQ"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div class="col-10">
                  <p className="py-2 fw-bold">
                    {" "}
                    1. Are these products authentic?
                  </p>
                  <p className="mb-3">
                    Of course! We have teamed up with LINE FRIENDS to start
                    pop-up stores across India, bringing official BT21 and LINE
                    FRIENDS products to India for the first time ever.
                  </p>
                </div>
                <div className="col-1 px-1 py-1 ">
                  <div className="row py-2 px-2">
                    <div className="col-6 bg-success text-white py-1 ">
                      <a className="text-white" href="#">
                        <i className="fa-solid fa-trash-can" />
                      </a>
                    </div>
                    <div className="col-6 bg-success text-white  py-1 ">
                      <a
                        className="border-0  text-white  rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#AddFAQ"
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Events"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-light">
          <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div className="modal-body">
              <p className="fs-3 text-center"> Banner</p>
              <div className="row">
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
                <div className="col px-3">
                  <img src="assets/images/banner.png" className="img-fluid" />
                </div>
              </div>
              <div className="row my-3">
                <div class="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                  <label className="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>

              <div className="row text-center">
                <div className="text-center mb-3 px-3  ">
                <a
                    href="#"
                    type="submit"
                    className="btn  action_button  rounded-pill btn-sm mx-2"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="mx-3 btn bg-main rounded-pill  text-white btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="AddFAQ"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-light">
          <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              </h1>
              <button
                type="button"
                className=" btn-success bg-success text-white border-0 rounded"
                data-bs-dismiss="modal"
                aria-label="Close"
              > IND</button>
            </div>
            <div className="modal-body">
              <p className="fs-3 text-center"> Add Faq's</p>

              <div className="row my-3">
                <div class="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile02"
                    placeholder="Question"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div class="input-group mb-2">
                  <textarea
                    className="form-control"
                    id="inputGroupFile02"
                    rows="3"
                    placeholder="Answere"
                  >
                    {" "}
                  </textarea>
                </div>
              </div>

              <div className="row text-center">
                <div className="text-center mt-2 mb-3 px-3  ">
                  <a
                    href="#"
                    type="submit"
                    className="btn  action_button  rounded-pill btn-sm mx-2"
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="mx-3 btn bg-main rounded-pill  text-white btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Pages;
