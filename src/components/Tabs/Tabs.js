import React from "react";
import "./Tabs.css"


const Tabs = () => {
  return (
    <div className="Tabs">
      <ul className="nav">
        <li>Tab one</li>
        <li>Tab two</li>
      </ul>
      <div className="outlet">
        <p>content will be shown here</p>
      </div>
    </div>
  )
}

export default Tabs;