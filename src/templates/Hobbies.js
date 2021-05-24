import React from "react";
import IconAndLabel from "../components/IconAndLabel";
import TitleContent from "../components/TitleContent";
import { hobbies } from "../data";

const Hobbies = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="HOBBIES" icon="sign language" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {hobbies &&
          hobbies.map((item) => (
            <IconAndLabel icon={item.icon} label={item.label} />
          ))}
      </div>
    </div>
  );
};

export default Hobbies;
