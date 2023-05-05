import React from "react";
import Container from "react-bootstrap/Container";

const styles = {
  textAlign: "center",
};

export default function Home() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "200px",
          paddingTop: "100px",
        }}
      >
        Hi! My name is Nikola Lucic and I am a web developer
      </h2>
    </Container>
  );
}
