import React from "react";
function Navbar() {
  return (
    <div className="navbar-container">
      {/* <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ height: "5rem" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <img
                className="navbar-logo-image"
                src="WhatsApp_Image_2024-09-20_at_15.31.32_d5c1b748-removebg-preview.png"
                alt="No logo found"
              />
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNav">
          <div className="mainNav  d-flex justify-content-between w-100">
            <div>
              {" "}
              <img
                className="navbar-logo-image"
                src="WhatsApp_Image_2024-09-20_at_15.31.32_d5c1b748-removebg-preview.png"
                alt="No logo found"
              />
            </div>
            <div >
              <div class="navbar-nav ">
                <div class="nav-item active">
                  <a class="nav-link" href="#">
                    Home{" "}
                  </a>
                </div>
                <div class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </div>
                <div class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </div>
                <div class="nav-item">
                  <a class="nav-link" href="#">
                    Career
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
