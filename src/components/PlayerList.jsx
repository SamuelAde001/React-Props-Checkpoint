// src/components/PlayersList.jsx
import React from "react";
import { Player } from "./Player";
import { players } from "../players";

export const PlayerList = () => {
  return (
    // div to wrap around the cards
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {/*  function that maps through the player data to provide multiple player cards*/}
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};
