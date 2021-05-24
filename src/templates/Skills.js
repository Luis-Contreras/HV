import React from "react";
import IconAndLabel from "../components/IconAndLabel";
import TitleContent from "../components/TitleContent";
import { skills } from "../data";

const Skills = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="HABILIDADES" icon="bolt" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {skills &&
          skills.map((item) => (
            <IconAndLabel icon={item.icon} label={item.label} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
