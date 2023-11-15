import React from "react";
import Card from "react-bootstrap/Card";

// decontructing the player data so i could reuse it in as props
export const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl,
}) => {
  return (
    //The card of an individual player
    <Card
      style={{
        width: "18rem",
        height: "25rem",
        margin: "auto",
        marginTop: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#488286",
      }}
    >
      {/* The image of the card */}
      <Card.Img variant="top" src={imageUrl} style={{ maxWidth: "100%" }} />
      {/* card body */}
      <Card.Body>
        {/* Card title */}
        <Card.Title
          style={{
            textDecoration: "underline",
            fontSize: "25px",
            fontWeight: "800",
            margin: "10px 0",
          }}
        >
          {name}
        </Card.Title>
        {/* all other details here */}
        <Card.Text>
          <p>Team: {team}</p>
          <br />
          <p>Nationality: {nationality}</p>
          <br />
          <p>Jersey Number: {jerseyNumber}</p>
          <br />
          <p>Age: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
