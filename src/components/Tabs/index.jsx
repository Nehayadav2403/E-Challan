// import React from "react";
// import { Tabs } from "antd";
// import Offline from "../Offline";
// import Online from "../Online";
// import ChallanDekhoComponent from "../ChallanDekho";

// const TabComponent = () => {
//   const items = [
//     {
//       key: "1",
//       label: "Challan Dekho",
//       children: <ChallanDekhoComponent />,
//     },
//     {
//       key: "2",
//       label: "Online",
//       children: <Online />,
//     },
//     {
//       key: "3",
//       label: "Offline",
//       children: <Offline />,
//     },
//   ];
//   const onChange = (key) => {
//     console.log(key);
//   };
//   return (
//     <div>
//       <div className="pay-challan">
//         <div className="h2-heading-pay-challan">
//           <h2 className="how-can-pay-challan">How Can I Pay Challan</h2>
//         </div>
//         <div className="paragraph-pay-online-offline">
//           <p>
//             Electronic fines replace traditional paper challans and are directly
//             sent to the violator's mobile device or email.However, there are
//             three ways to pay your challan: online or offline.
//           </p>
//         </div>
//       </div>

//       <Tabs
//         defaultActiveKey="1"
//         items={items}
//         onChange={onChange}

//       />
//     </div>
//   );
// };

// export default TabComponent;

import React from "react";
import Offline from "../Offline";
import Online from "../Online";
import ChallanDekhoComponent from "../ChallanDekho";
const TabComponent = () => {
  return (
    <>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item-tab-0" role="presentation">
          <a
            class="nav-link active"
            id="tab-0"
            data-bs-toggle="tab"
            href="#tabpanel-0"
            role="tab"
            aria-controls="nav-tabpanel-0"
            aria-selected="true"
          >
            {" "}
            Challan Dekho{" "}
          </a>
        </li>
        <li class="nav-item-tab-1" role="presentation">
          <a
            class="nav-link"
            id="tab-1"
            data-bs-toggle="tab"
            href="#tabpanel-1"
            role="tab"
            aria-controls="nav-tabpanel-1"
            aria-selected="false"
          >
            {" "}
            Online{" "}
          </a>
        </li>
        <li class="nav-item-tab-2" role="presentation">
          <a
            class="nav-link"
            id="tab-2"
            data-bs-toggle="tab"
            href="#tabpanel-2"
            role="tab"
            aria-controls="nav-tabpanel-2"
            aria-selected="false"
          >
            {" "}
            Offline{" "}
          </a>
        </li>
      </ul>
      <div class="tab-content pt-5" id="tab-content">
        <div
          class="tab-pane active"
          id="tabpanel-0"
          role="tabpanel"
          aria-labelledby="tab-0"
        >
          {" "}
          <ChallanDekhoComponent />
        </div>
        <div
          class="tab-pane"
          id="tabpanel-1"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          {" "}
          <Online />
        </div>
        <div
          class="tab-pane"
          id="tabpanel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
        >
          {" "}
          <Offline />
        </div>
      </div>
    </>
  );
};

export default TabComponent;
