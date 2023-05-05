import React from "react";
import image from "../../assets/images/selfie.png";
export default function About() {
  return (
    <div class="About">
      <div class="image">
        <img
          src={image}
          style={{ width: "400px", height: "670px" }}
          alt="profile picture"
        ></img>
      </div>
      <div class="text">
        <p>
          I am a recent graduate of University of Miami, Coding Bootcamp and I
          am looking to continue working in this field as I have found so much
          interest and beauty in creating websites and making them come alive.
          After being in service industry for 12 years, I wanted to dive into
          something I have never thought of where i can display my creative
          side. Stepping into this field was never my intention but i stumbled
          upon it randomly as i was looking into interior design and i found
          interest because that would mean creating something different,
          something people will always need. I plan to continue my journey with
          website development and most likely take it to the level of front end
          design since I am very interested in how pages look like.
        </p>
      </div>
    </div>
  );
}
