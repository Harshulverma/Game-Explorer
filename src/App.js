import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
// import Navbar from "./components/Navbar";
import Library from "./pages/Library";
import Auth from "./pages/auth";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/library" element={<Library />} />
        <Route path="/sign-in" element={<Auth mode="sign-in" />} />
        <Route path="/sign-up" element={<Auth mode="sign-up" />} />
      </Routes>
    </>
  );
};

export default App;


