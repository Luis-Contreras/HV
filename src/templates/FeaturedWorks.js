import React from "react";
import ListIcon from "../components/ListIcon";
import TitleContent from "../components/TitleContent";
import { featuredWorks } from "../data";

const FeaturedWorks = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="TRABAJOS DESTACADOS" icon="rocket" />
      {featuredWorks &&
        featuredWorks.map((item) => (
          <ListIcon text={item.text} link={item.link} />
        ))}
    </div>
  );
};

export default FeaturedWorks;
