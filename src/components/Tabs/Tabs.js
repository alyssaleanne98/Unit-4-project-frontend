import React from "react";

const Tabs = () => {
  return (
    <div className="Tabs">
      <ul className="tab-buttons">
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