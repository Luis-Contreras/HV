import React from "react";
import { Header } from "semantic-ui-react";

const Title = ({ label }) => {
  return <Header as="h1">{label}</Header>;
};

export default Title;
