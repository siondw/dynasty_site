import React from "react";
import TeamHeader from "./components/TeamHeader/TeamHeader";
import "./styles.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TabGroup from "./components/TabGroup/TabGroup";
import PositionIcon from "./components/PositionIcon/PositionIcon";
import RosterContainer from "./components/RosterContainer/RosterContainer";

const mockTeamData = {
  id: "2",
  owner: "Sion",
  finishPosition: "5th",
  strengths: "RB",
  needs: "QB, WR",
  faab: "230",
};

const mockRosterData = [
  { id: 1, position: "QB", name: "John Doe" },
  { id: 2, position: "QB", name: "Jane Smith" },
  { id: 3, position: "RB", name: "Mike Johnson" },
  { id: 4, position: "RB", name: "Sarah Williams" },
  { id: 5, position: "WR", name: "David Brown" },
  { id: 6, position: "WR", name: "Emily Davis" },
  { id: 7, position: "TE", name: "Michael Wilson" },
  { id: 8, position: "TE", name: "Olivia Taylor" },
];

function App() {
  return (
    <div className="App">
      <TeamHeader team={mockTeamData} />
      <TabGroup rosterData={mockRosterData} />
    </div>
  );
}

export default App;
