import React from "react";
import CircleImg from "../components/CircleImg";
import IconAndLabel from "../components/IconAndLabel";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { personalData } from "../data";

const PersonalInformation = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}>
      <CircleImg img="/imgPerfil.jpg" />
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
