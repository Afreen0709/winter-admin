import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Profile = () => {
 
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
                  <p className="fs-3 fw-semibold">Profile</p>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="overview   bg-white">
                        <div className="form">
                          <div className="container-fluid px-1 mx-auto">
                            <div className="row d-flex justify-content-center">
                              <div className=" col-lg-12 col-12 text-center">
                                <div className="card">
                                  <p className="fs-4 cmfont text-start py-3 mb-3 px-3">
                                    Edit Your Profile
                                  </p>
                                  <form
                                    className="form-card"
                                    onsubmit="event.preventDefault()"
                                  >
                                    <div className="row justify-content-between text-left px-3">
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          First name
                                        </label>
                                        <input
                                          type="text"
                                          id="fname"
                                          name="fname"
                                          placeholder=""
                                          onblur="validate(1)"
                                        />
                                      </div>
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Last name
                                        </label>
                                        <input
                                          type="text"
                                          id="lname"
                                          name="lname"
                                          placeholder=""
                                          onblur="validate(2)"
                                        />
                                      </div>
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          email
                                        </label>
                                        <input
                                          type="text"
                                          id="email"
                                          name="email"
                                          placeholder=""
                                          onblur="validate(3)"
                                        />
                                      </div>
                                      <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Phone no
                                        </label>
                                        <input
                                          type="text"
                                          id="mob"
                                          name="mob"
                                          placeholder=""
                                          onblur="validate(4)"
                                        />
                                      </div>
                                    

                                      <div className="form-group col-12 flex-column d-flex">
                                        <label className="form-control-label text-start pb-1">
                                          Password Changes
                                        </label>
                                        <input
                                          type="text"
                                          id=""
                                          name="ans"
                                          placeholder="Current Passwod"
                                          onblur="validate(6)"
                                        />

                                        <input
                                          type="text"
                                          id=""
                                          name="ans"
                                          placeholder="New Passwod"
                                          onblur="validate(6)"
                                        />

                                        <input
                                          type="text"
                                          id=""
                                          name="ans"
                                          placeholder="Confirm New Passwod"
                                          onblur="validate(6)"
                                        />
                                      </div>

                                      <div className="form-group d-inline text-center mt-3  col-sm-12 text-md-start">
                                        <button
                                          type="submit"
                                          className="btn rounded-pill  btn-primary bg-secondary-subtle btn-sm border-0 px-3 mx-3 text-dark mb-3 d-none d-md-inline"
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          type="submit"
                                          className="btn rounded-pill bg-main bg-secondary-subtle btn-sm border-0 px-3 mx-3 text-light mb-3"
                                        >
                                          Save Chnages
                                        </button>
                                      </div>
                                    </div>
                                   
                                   
                                   
                                    <div className="row py-3 px-3  ">
                                    
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
      </div>
     
      
      <Footer />
    </>
  );
};

export default Profile;
