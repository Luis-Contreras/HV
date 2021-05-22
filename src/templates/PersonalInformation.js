import React from "react";
import CircleImg from "../components/CircleImg";
import IconAndLabel from "../components/IconAndLabel";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { personalData } from "../data/personalData";

const PersonalInformation = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <CircleImg img="https://images.squarespace-cdn.com/content/5a458c4df9a61e9df8344ffe/1567291833787-XK8NR1SYQ8YCGURYM85P/Dwane-Johnson.jpg?content-type=image%2Fjpeg" />
      <Title label="Luis David Contreras Tamayo" />
      <Subtitle label="Desarrollador de software" />
      <div
        style={{
          width: "50%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}>
        {personalData &&
          personalData.map((item) => (
            <IconAndLabel icon={item.icon} label={item.label} />
          ))}
      </div>
    </div>
  );
};

export default PersonalInformation;
