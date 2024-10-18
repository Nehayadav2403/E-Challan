import React, { useState } from "react";
import MainLayout from "../MainLayout";
import TabComponent from "../Tabs/index";
import Faq from "../Faq";
import Boxes from "../Box/index";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const [isExpanded1, setIsExpanded1] = useState(false);

  const toggleReadMore1 = () => setIsExpanded1(!isExpanded1);

  return (
    <MainLayout>
      <div className="container">
        <div className="col-9">
          <div className="home-img">
            <img className="image-home" src="rchero.svg" alt=""></img>
          </div>
          <div className="home-text">
            <p>Check E-Challan Online</p>
          </div>
          <div className="checkbox-text">
            <p>
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                checked
                style={{ backgroundColor: "limegreen", marginLeft: "-2rem" }}
              />
              Check Your Traffic E-Challan For Free{" "}
            </p>
          </div>
          <div className="easily-pay">
            <p>
              <input
                class="form-check-input"
                type="checkbox"
                checked
                style={{ marginLeft: "-2rem", backgroundColor: " #4CAF50" }}
              />
              Easily Pay Your Traffic E-Challan
            </p>
          </div>
          <div className="avoid-court">
            <p>
              <input
                class="form-check-input"
                type="checkbox"
                checked
                style={{ marginLeft: "-2rem", backgroundColor: " #4CAF50" }}
              />{" "}
              Avoid Court Visits-Settle Challan Online
            </p>
          </div>
        </div>
      </div>

      <div className="col-3 d-flex justify-content-between">
        <form>
          <p className="enter-vehicle-text">Enter Vehicle Number</p>
          <input class="input" type="text" />
          <div className="view-challan">
            <button className="view-challan-button" type="submit">
              View Challan
            </button>
          </div>
        </form>
      </div>
<div className="text">
      <div className="check-pay-text">
        <div className="h2-heading-text">
          <h2 className="check-text">Check & Pay E-Challan Online</h2>
        </div>
        <div className="h2-heading-paragraph-text">
          <p>
            In the digital age, managing traffic challans has become an easy and
            simple process, thanks to e-challan digital traffic systems. These
            electronic challans, or e-challans, are not just a leap towards
            modern governance but also a convenient way for citizens to handle
            their vehicle fines.
          </p>
        </div>
      </div>
      <div className="e-challan-text">
        <div className="h2-heading-second-text">
          <h2 className="e-challan">What is an E-Challan?</h2>
        </div>
        <div className="e-challan-paragraph-text">
          <p>
            An e-challan is a digital citation issued by traffic authorities for
            violations of road rules. Replacing traditional paper challans,
            these electronic fines are directly sent to the violator's mobile
            device or email. The system is integrated with a centralized
            database, enhancing transparency and efficiency. Benefits include
            quick processing, easy tracking, and a reduced chance of manual
            errors, making it a cornerstone of online traffic challan
            management.
          </p>
        </div>
      </div>
      {isExpanded && (
        <>
          <div className="check-e-challan-online">
            <div className="h2-heading-check-challan">
              <h2 className="check-e-challan">
                How to Check Your E-Challan Online
              </h2>
            </div>
            <div className="check-your-challan">
              <p>
                Checking your e-challan online is a straightforward process:
                1.Visit the Official Portal: Navigate to the designated
                government e-challan portal. 2. Enter Vehicle Details: Input
                your vehicle's registration number to check challan on vehicle.
                3. View Challan Details: The website will display all the
                e-challans linked to your vehicle. 4. Review Challan
                Information: Ensure that the details of the violation, date, and
                fine amount are correct.
              </p>
            </div>
          </div>
          <div className="paying-e-challan-online">
            <div className="h2-heading-pay-online">
              <h2 className="pay-e-challan">Paying Your E-Challan-Online</h2>
            </div>
            <div className="paragarph-pay-online">
              <p>
                Once you've checked your e-challan, the next step is to pay it:
                1. Select the Challan to Pay: Choose the e-challan you wish to
                settle.2. Payment Gateway: You'll be redirected to a secure
                payment gateway. 3.Choose Payment Method: Opt for a convenient
                payment method - credit/debit card, net banking, or digital
                wallets. 4. Complete the Transaction: Follow the instructions to
                finalize your payment.5. Receive Confirmation: A confirmation
                with a transaction ID will be provided for your records.
              </p>
            </div>
          </div>
          <div className="common-question-e-challan">
            <div className="h2-heading-e-challan-question">
              <h2 className="e-challan-question">
                Common Question About E-Challans
              </h2>
            </div>
            <div className="paragraph-e-challan-question">
              <p>
                What if I don't pay the challan? Non-payment can lead to legal
                consequences, including additional fines. How secure is online
                challan payment? Payments are made through secure gateways,
                ensuring safety. Can I contest a challan I believe is incorrect?
                Yes, you can raise disputes by contacting the traffic
                authority's helpdesk with relevant proofs.
              </p>
            </div>
          </div>
          <div className="penalties-fines">
            <div className="h2-heading-penalties-fines">
              <h2
                className="penalties-and-fines
            "
              >
                Penalties and Fines
              </h2>
            </div>
            <div className="paragraph-penalties-and-fines">
              <p>
                Common traffic violations include: Over speeding: Fines vary
                based on vehicle type. Driving without a license: A hefty fine
                or community service. Signal jumping: Can lead to fines and
                license seizure.
              </p>
            </div>
          </div>
          <div className="advantage-e-challan-payment">
            <div className="h2-heading-e-challan-payment">
              <h2 className="advantage-challan-payment">
                Advantage of Timely E-Challan-Payment
              </h2>
            </div>
            <div className="paragraph-advantage-e-challan">
              <p>
                Prompt payment of e-challans helps avoid additional penalties
                and legal hassles. It also reflects responsible citizenship and
                adherence to traffic norms.
              </p>
            </div>
          </div>

          <div className="conclusion-text">
            <div className="h2-heading-conclusion">
              <h2 className="conclusion">Conclusion</h2>
            </div>
            <div className="paragraph-conclusion">
              <p style={{}}>
                E-challans have revolutionized the way traffic violations are
                managed. By using the online system to check and pay fines,
                citizens can effortlessly comply with traffic regulations,
                ensuring safer roads and a smoother driving experience.
                Remember, staying informed and prompt in addressing e-challans
                not only saves time but also contributes to a disciplined
                traffic environment.
              </p>
            </div>
          </div>
        </>
      )}
      {/* {/ Read more/less toggle button /} */}
      <button className="read-more-button" onClick={toggleReadMore} style={{}}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      <div className="traffic-violations">
        <h2 className="violations-and-penalties">
          Latest Traffic Violations and Their Penalties
        </h2>
      </div>
      <div className="paragraph-traffic-violations">
        <p>
          Staying informed regarding the latest traffic violations in India to
          avoid mishaps on the road is highly crucial. Here are some crucial
          violations and their penalties that you should be aware of:
        </p>
      </div>
      </div>

      <div className="tablename 1">
        <div className="h4-heading-offence-document">
          <h4 className="offences-document">Offences Regarding Documents:</h4>
        </div>
        <div className="offences-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  <strong
                    style={{
                      fontFamily: "RobotoMedium, sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    Offenses
                  </strong>
                </th>
                <th>
                  <strong
                    style={{
                      fontFamily: "RobotoMedium, sans-serif",
                      fontSize: "25px",
                    }}
                  >
                    Maximum Penalty (for two, three, four and six-wheelers)
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                  Driving without a license
                </td>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>₹5,000</td>
              </tr>
              <tr>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                  Driving with a suspended/expired driving License
                </td>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>₹5,000</td>
              </tr>
              <tr>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                  Underage Driver without a Driving License
                </td>
                <td style={{ fontSize: "20px", lineHeight: "60px" }}>₹5,000</td>
              </tr>
              {isExpanded1 && (
                <>
                  <tr>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      Driving without Registration Certificate
                    </td>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      ₹10,000
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      Plying transport vehicle without a Fitness Certificate
                    </td>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      ₹10,000
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      Driving a vehicle without insurance
                    </td>
                    <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                      ₹4,000
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isExpanded1 && (
        <div className="tablename 1">
          <div className="h4-heading-offence-related">
            <h4 className="offense-related">Offense Related:</h4>
          </div>
          <div className="offense-related-table">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>
                    <strong
                      style={{
                        fontFamily: "RobotoMedium, sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      Offenses
                    </strong>
                  </th>
                  <th>
                    <strong
                      style={{
                        fontFamily: "RobotoMedium, sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      Maximum Penalty (for two, three, four and six-wheelers)
                    </strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Overloading
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹20,000 + ₹2000/ tonne extra
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Dangerous/Rash driving
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹1,0000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Using a mobile phone while driving
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹10,000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Over-speeding
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹2,000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Drunken driving/abetment
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹15,000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Driver without helmet or Turban/Helmet
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹1,000
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    Pillion Rider without Helmet
                  </td>
                  <td style={{ fontSize: "20px", lineHeight: "60px" }}>
                    ₹1,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* {/ Read more/less toggle button /} */}
      <button className="view-more-button" onClick={toggleReadMore1}>
        {isExpanded1 ? "View Less" : "View More"}
      </button>
     
      <div>
        <Boxes />
      </div>

      <div style={{ marginTop: "10rem" }}>
        <TabComponent />
      </div>

      <div>
        <Faq />
      </div>
      {/* </div> */}
    </MainLayout>
  );
};

export default Home;
