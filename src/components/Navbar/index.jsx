import React from "react";
function Navbar() {
  return (
    <div className="navbar-container">
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
            <div>
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
