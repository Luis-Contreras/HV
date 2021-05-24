import React from "react";
import { Progress as ProgressSemantic } from "semantic-ui-react";

const Progress = ({ porcent, icon, color, label }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "25px",
        marginLeft: "20px",
      }}>
      {icon}

      <ProgressSemantic
        style={{ width: "90%" }}
        percent={porcent}
        color={color}
        label={label}
        progress
      />
    </div>
  );
};

export default Progress;
