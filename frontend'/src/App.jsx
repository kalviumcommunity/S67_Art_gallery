import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import DummyArtwork from "./components/ArtworkCard";  // Example page for listing artworks


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/artworks" element={<DummyArtwork />} />
       
      </Routes>
    </Router>
  );
}

export default App;
