import React from "react";
import { Container } from "@mui/material";
import Alert1 from "./Alert1";

const ComponentPrac = () => {
  return (
    <div>
      <p>Component Prac</p>
      <Container maxWidth="xs" sx={{ border: "1px solid green" }}>
        <p>I am from Container</p>
      </Container>
      <Container maxWidth="sm" sx={{ border: "1px solid green" }}>
        <p>I am from Container maxWidth="xs"</p>
      </Container>
      <Container maxWidth="md" sx={{ border: "1px solid green" }}>
        <p>I am from Container maxWidth="md"</p>
      </Container>
      <Container maxWidth="lg" sx={{ border: "1px solid green" }}>
        <p>I am from Container maxWidth="lg"</p>

        <Alert1 />
      </Container>
      <Container fixed sx={{ border: "1px solid green" }}>
        <p>I am from Container</p>
      </Container>
    </div>
  );
};

export default ComponentPrac;
