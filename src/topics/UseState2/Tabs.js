import React, { useEffect, useState } from "react";
import { Tab } from "./Tab";

export const Tabs = ({ tabs = [], onChange = () => {} }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onClickTab = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    onChange(currentTab);
  }, [currentTab]);

  return (
    <div style={{ display: "flex" }}>
      {tabs.map((tab, index) => (
        <Tab {...tab} onClick={() => onClickTab(index)} />
      ))}
    </div>
  );
};
