import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles.css";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TeamProfileScreen from "./screens/TeamProfileScreen/TeamProfileScreen";
import LeagueViewScreen from "./screens/LeagueViewScreen/LeagueViewScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/team/:teamId" element={<TeamProfileScreen />} />
          <Route path="/league-view" element={<LeagueViewScreen />} /> 
        </Routes>
      </div>
    </Router>
  );
}
export default App;
