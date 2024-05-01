import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles.css";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TeamProfileScreen from "./screens/TeamProfileScreen/TeamProfileScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/team/:teamId" element={<TeamProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
