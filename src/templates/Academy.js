import React from "react";
import ListItem from "../components/ListItem";
import TitleContent from "../components/TitleContent";
import { edutationData } from "../data";

const Academy = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="EDUCACIÓN" icon="university" />
      {edutationData &&
        edutationData.map((item) => (
          <ListItem
            year={item.year}
            university={item.university}
            title={item.title}
          />
        ))}
    </div>
  );
};

export default Academy;
