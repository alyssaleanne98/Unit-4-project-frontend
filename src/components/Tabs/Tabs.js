import React, { useState } from "react";
// import FirstTab from "../AllTabs/FirstTab";
// import SecondTab from "../AllTabs/SecTab";
// import ThirdTab from "../AllTabs/ThirdTab";
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import "./Tabs.css"


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tabone");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
    </div>
  )


  // Functions to handle Tab switching 



//   return (
//     <div className="Tabs">
//       <ul className="nav">

//         <li className={activeTab === "tabone" ? "active" : ""} onClick={handleTabone}>Tab 1</li>
//         {/* tab one has a background color since it is the "active tab"*/}
//         <li className={activeTab === "tabtwo" ? "active" : ""} onClick={handleTabtwo}>Tab 2</li>
//         <li className={activeTab === "tabthree" ? "active" : ""} onClick={handleTabthree}>Tab 3</li>
//       </ul>

//       <div className="outlet">
//       {activeTab === "tabone" ? <FirstTab /> : <SecondTab />} 
//         {/* This tells react DOM to show the first tab when the active tab is tab one. otherwise it shows tab two  */}
//       </div>
//     </div>
//   )
// }
  }

export default Tabs;