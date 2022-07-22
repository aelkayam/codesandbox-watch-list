import React from "react";
import Header from "./components/Header/Header";
import WatchList from "./components/Watchlist/Watchlist";
import Watched from "./components/Watched/Watched";
import Add from "./components/Add/Add";
import "./style.css";
import "./lib/font-awesome/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
