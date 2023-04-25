import React, { useState } from "react";
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import "./Tabs.css"


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tabone");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Cerebrum" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Cerebellum" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Brain stem" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p className="tab-p">The cerebrum is the largest part of the brain! The right half controls the left side of the body white the left half controls the right side. The outer area of the cerebrum is know as the "cerebral cortex" where it is responsible for thinking, behaviour, movement, feelings, senses, and personality.</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p className="tab-p">  The cerebellum is the structure located in the back of your brain. It plays a vital role in most maintaining balance, coordinating movement, vision, motor learning, and other functions such as processing language and mood. </p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p className="tab-p">The brain stem is the lower part of the brain that is connected to the spinal cord. The brain stem sends messages between your brain to other parts of your body. It helps coordinate messages to regulate blood pressure, breathing, hearing, and swallowing.</p>
        </TabContent>

      </div>


    </div>
  );

};

export default Tabs;