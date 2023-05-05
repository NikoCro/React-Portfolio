import React from "react";

export default function Card(props) {
  const cardStyle = {
    width: "18rem",
    height: "15rem",
    marginTop: "100px",
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <a href={props.link} className="card-text">
            Go To Project
          </a>
        </div>
      </div>
    </div>
  );
}
