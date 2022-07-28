import React from "react";
import Header from "./components/Header/Header";
import WatchList from "./components/Watchlist/Watchlist";
import Watched from "./components/Watched/Watched";
import Add from "./components/Add/Add";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import "./style.css";
import "./lib/font-awesome/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}
