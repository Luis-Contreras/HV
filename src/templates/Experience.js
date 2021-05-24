import React from "react";
import ListItem from "../components/ListItem";
import TitleContent from "../components/TitleContent";
import { experiencieData } from "../data";

const Experiencie = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="EXPERIENCIA" icon="certificate" />
      {experiencieData &&
        experiencieData.map((item) => (
          <ListItem
            year={item.year}
            university={item.university}
            title={item.title}
          />
        ))}
    </div>
  );
};

export default Experiencie;
