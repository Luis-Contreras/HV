import React from "react";
import { Header } from "semantic-ui-react";

const Subtitle = ({ label }) => {
  return (
    <Header as="h3" style={{ marginTop: 0, fontStyle: "italic" }}>
      {label}
    </Header>
  );
};

export default Subtitle;
