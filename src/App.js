import Nav from "./components/Nav";
import Main from "./components/Main";
import Tabs from "./components/Tabs/Tabs"
// import Tab from "./components/Tabs/Tabs"
import React, { useState} from 'react';
// // import Create from "./pages/Create/Create.jsx";
// import Show from "./pages/Show/Show.jsx";
// import Index from "./pages/Index/Index.jsx";
// import { useState } from "react";



function App() {
  //   const [cards, setCards] = useState([])

console.log("hi")
  return (
    <div className="App">
      <Nav />
      <Tabs />
      {/* <Section /> */}
      <Main />
    </div>
  );
};




export default App;