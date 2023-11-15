// src/App.jsx
import React from "react";
import { PlayerList } from "./components/PlayerList";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Roboto, sans-serif",
        color: "#fff",
      }}
    >
      {/* Heading of the App */}
      <h1
        style={{
          textDecoration: "underline",
          fontSize: "45px",
          fontWeight: "800",
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        Football Players
      </h1>
      {/* Player list component */}
      <PlayerList />
    </div>
  );
}

export default App;
