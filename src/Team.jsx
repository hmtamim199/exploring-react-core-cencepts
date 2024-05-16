import { useState } from "react";


const Team = () => {

  const teamStyle = {
    border: '2px solid yellow',
    margin: '4px',
    padding: '4px',

  }

  const [team, setTeam] = useState(10);

  const handleTeam = () => {
    const newTeam = team + 1;
    setTeam(newTeam)
  }
  return (
    <div style={teamStyle}>
      <h3>plyer:{team}</h3>
      <button onClick={handleTeam}>add</button>
    </div>
  );
};

export default Team;