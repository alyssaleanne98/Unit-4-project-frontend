import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecTab";
import "./Tabs.css"


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tabone");


  // Functions to handle Tab switching 

  const handleTabone = () => { //updates the state to tab one
    setActiveTab("tabone");
  }

  const handleTabtwo = () => { // update the state to tab two 
    setActiveTab("tabtwo");
  };



  return (
    <div className="Tabs">
      <ul className="nav">

        <li className={activeTab === "tabone" ? "active" : ""} onClick={handleTabone}>Tab 1</li>
        {/* tab one has a background color since it is the "active tab"*/}
        <li className={activeTab === "tabtwo" ? "active" : ""} onClick={handleTabtwo}>Tab 2</li>
      </ul>

      <div className="outlet">
        {activeTab === "tabone" ? <FirstTab /> : <SecondTab />} 
        {/* This tells react DOM to show the first tab when the active tab is tab one. otherwise it shows tab two  */}
      </div>
    </div>
  )
}


export default Tabs;