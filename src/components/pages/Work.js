import React from "react";
import Card from "../Card";

export default function Work() {
  return (
    <div class="container text-center" style={{ minHeight: "100vh" }}>
      <div class="row align-items-start">
        <h2> These are all the projects I worked on:</h2>
        <div class="col">
          <Card
            name="Plants2Pot"
            description="E-commerce site that sells plants"
            link="https://morning-sands-53592.herokuapp.com"
          />
        </div>
        <div class="col">
          <Card
            name="Weather forecast app"
            description="Weather app that shows weather conditions for a week "
            link="http://127.0.0.1:5500/Weather-forecast-application/index.html"
          />
        </div>
        <div class="col">
          <Card
            name="Simply Stay"
            description="Travel app that finds most desirable stays comparing hotels and Airnbnb"
            link="https://nikocro.github.io/Group-Project-01/"
          />
        </div>
      </div>
    </div>
  );
}
