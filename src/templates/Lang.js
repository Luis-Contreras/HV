import React from "react";
import Progress from "../components/Progress";
import TitleContent from "../components/TitleContent";
import { languages } from "../data";

const Lang = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="LENGUAJES" icon="code" />
      {languages &&
        languages.map((item) => (
          <Progress
            porcent={item.porcent}
            icon={item.icon}
            color={item.color}
            label={item.label}
          />
        ))}
    </div>
  );
};

export default Lang;
