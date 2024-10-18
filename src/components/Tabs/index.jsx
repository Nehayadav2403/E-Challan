import React from "react";
import { Tabs } from "antd";
import Offline from "../Offline";
import Online from "../Online";
import ChallanDekhoComponent from "../ChallanDekho";

const TabComponent = () => {
  const items = [
    {
      key: "1",
      label: "Challan Dekho",
      children: <ChallanDekhoComponent />,
    },
    {
      key: "2",
      label: "Online",
      children: <Online />,
    },
    {
      key: "3",
      label: "Offline",
      children: <Offline />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="pay-challan">
        <div className="h2-heading-pay-challan">
          <h2 className="how-can-pay-challan">How Can I Pay Challan</h2>
        </div>
        <div className="paragraph-pay-online-offline">
          <p>
            Electronic fines replace traditional paper challans and are directly
            sent to the violator's mobile device or email.However, there are
            three ways to pay your challan: online or offline.
          </p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabBarStyle={{
          marginBottom: "24px",
          gap: "200px",
          marginLeft: "-10rem",
        }}
      />
    </div>
  );
};

export default TabComponent;
