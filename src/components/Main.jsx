// import { Routes, Route } from "react-router-dom"
// import { useState, useEffect } from "react";
// import Index from "../pages/Index";
// import Show from "../pages/Show";

// export default function Main() {
//     const [cards, setCards] = useState(null);


//     //Index
//     const getCards = async () => {
//         //fetch - GET
//         setCards();
//     };

//     //Create 
//     const createCards = async (card) => {
//         //fetch - POST
//         getCards();
//     };

//     //Delete
//     const deleteCards = async (id) => {
//         // fetch - DELETE
//         getCards();
//     };

//     useEffect(() => {
//         getCards();
//     }, []);

//     return (
//         <main>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={<Index cards={cards} createCards={createCards} />}
//                 />
//                 <Route
//                     path="/cards/:id"
//                     element={
//                         <Show
//                             cards={cards}
//                             deleteCards={deleteCards}
//                             updateCards={updateCards}
//                         />
//                     }
//                 />
//             </Routes>
//         </main>
//     );
// }         