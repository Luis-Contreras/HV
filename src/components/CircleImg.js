import React from "react";
import { Image } from "semantic-ui-react";

const CircleImg = ({ img }) => {
  return <Image src={img} size="medium" circular />;
};

export default CircleImg;
