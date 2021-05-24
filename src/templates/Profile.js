import React from "react";
import Paragraph from "../components/Paragraph";
import TitleContent from "../components/TitleContent";
import { profileData } from "../data";

const Profile = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="PERFIL" icon="medapps" />
      <Paragraph label={profileData} />
    </div>
  );
};

export default Profile;
