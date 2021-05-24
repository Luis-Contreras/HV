import React from "react";

const Paragraph = ({ label }) => {
  return (
    <div style={{ width: "90%", marginLeft: "20px", marginTop: "40px" }}>
      <p style={{ fontSize: "large" }}>{label}</p>
    </div>
  );
};

export default Paragraph;
