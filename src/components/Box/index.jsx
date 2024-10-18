import React from "react";

const Boxes = () => {
  return (
    <div className="container">
      <div className="check-e-challan">
        <div className="h2-heading-check-e-challan">
          <h2 className="check-challan">How to Check Your E-Challan</h2>
        </div>
        <div className="row">
          <div className="first-col-6">
            <div className="h3-heading-text">
              <h3 className="step-for-check-challan">
                Steps to Check Challan Using the Challan Dekho app
              </h3>
            </div>
            <div className="paragraph-visit-app">
              <p>1. Visit the Challan Dekho website or open the app.</p>
            </div>
            <div className="click-challan">
              <p>2. Click on the "Challan" tab.</p>
            </div>
            <div className="enter-vehicle-number">
              <p>
                3. Enter your vehicle registration number and click on Challan
                Details.
              </p>
            </div>
            <div className="find-update-button">
              <p>
                4. You will find an update button,which once you click,will ask
                you to "Update now".
              </p>
            </div>
            <div className="get-e-challan-status">
              <p>
                5. Once you click on "Update now",you will get the e-challan
                status.
              </p>
            </div>
            <div className="first-box-image">
              <img src="i_Phone_12_Pro.webp" alt=""></img>
            </div>
          </div>
          <div className="second-col-6">
            <div className="h3-heading-parivahan-website">
              <h3 className="parivahan-website">
                Steps to Check Challan Using Parivahan website
              </h3>
            </div>
            <div className="visit-parivahan-website">
              <p>
                1. Visit the Parivahan Website: Go to the eChallan System Link
                and a login page will appear.
              </p>
            </div>
            <div className="click-get-challan-details">
              <p>
                2. Click on Get Challan Details: You have the option to choose
                between Challan Number,Vehicle Number and DL Number.
              </p>
            </div>
            <div className="enter-details-captcha">
              <p>
                3. Enter Details and Captcha: Details of the Challan(if any)
                will be shown.
              </p>
            </div>
            <div className="select-the-e-challan">
              <p>
                4. Select the e-Challan: Get Details of the offence and penalty
                to be paid.
              </p>
            </div>
            <div className="proceed-the-payment">
              <p>
                Proceed with the Payment: Upon Successful completion,you will
                recieve a confirmation along with the transaction ID.
              </p>
            </div>
            <div className="studio-display-image">
              <img src="Studio_Display.webp" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
