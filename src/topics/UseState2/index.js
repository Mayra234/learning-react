import React, { useState } from "react";
import { Tabs } from "./Tabs";

export const UseState2 = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <h1>
        Manejo de estados, Tabs - <b>useState</b>
      </h1>
      <Tabs
        onChange={(index) => setCurrentTab(index)}
        tabs={[{ text: "Tab 1" }, { text: "Tab 2" }, { text: "Tab 3" }]}
      />
      {currentTab === 0 && <div>Content 1</div>}
      {currentTab === 1 && <div>Content 2</div>}
      {currentTab === 2 && <div>Content 3</div>}
    </>
  );
};
