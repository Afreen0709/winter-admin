// Header.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [navbarBg, setNavbarBg] = useState("bg-white");
  const location = useLocation();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const changeColorPosition = 10; // Change color after scrolling down 100 pixels

    if (scrollPosition > changeColorPosition) {
      setNavbarBg("fixed-top");
    } else {
      setNavbarBg("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <>
  {/* Hello world */}
  <header className="p-3 mb-3 ">
    <div className="container-fluid ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img src="assets/images/winterbear-logo.png" className="img-fluid" />
        </a>
        <ul className="nav col-12 col-lg-auto mx-lg-auto mb-2 justify-content-end mb-md-0">
          {/*<li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
  <li><a href="#" class="nav-link px-2 link-body-emphasis">Inventory</a></li>
  <li><a href="#" class="nav-link px-2 link-body-emphasis">Customers</a></li>
  <li><a href="#" class="nav-link px-2 link-body-emphasis">Products</a></li> */}
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          {/* <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          /> */}
        </form>
        <div className="dropdown text-end">
          <a
            href="#"
            className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width={32}
              height={32}
              className="rounded-circle"
            />{" "}
            <strong className="px-3">Mitash</strong>
          </a>
          <ul className="dropdown-menu text-small">
           
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
             
              <Link
              className={`dropdown-item`}
              to="/Profile"
            >
            
             
              Profile
            </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

 

</>

    </>
  );
};

export default Header;
