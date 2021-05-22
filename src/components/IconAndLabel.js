import React from "react";
import { Icon } from "semantic-ui-react";

const IconAndLabel = ({ icon, label }) => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <Icon size="big" bordered inverted color="teal" name={icon} />
      <p style={{ fontSize: "15px" }}>{label}</p>
    </div>
  );
};

export default IconAndLabel;
