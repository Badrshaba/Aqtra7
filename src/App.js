import React from "react";
import Haeder from "./commponat/Haeder";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Macdonald from "./pages/Macdonald";
import Kfc from "./pages/Kfc";
import Restaurants from "./pages/Restaurants";
import Volages from "./pages/Volages";
import Amr from "./pages/Amr";

const App = () => {
  return (
    <div>
      <Haeder />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/volages" element={<Volages />} />
        <Route path="/amr" element={<Amr />} />
        <Route path="/macdonald" element={<Macdonald />} />
        <Route path="/kfc" element={<Kfc />} />
      </Routes>
    </div>
  );
};

export default App;
