import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecTab";
import "./Tabs.css"


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tabone");


  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "tabone" ? "active" : ""}>Tab one</li>
        {/* tab one has a background color since it is the "active tab"*/}
        <li className={activeTab === "tabtwo" ? "active" : ""}>Tab two</li>
      </ul>
      
      <div className="outlet">
        {activeTab === "tabeone" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  )
}


export default Tabs;