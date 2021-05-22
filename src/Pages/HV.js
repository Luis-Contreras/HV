import React from "react";
import ContainerWrapper from "../components/Container";
import PersonalInformation from "../templates/PersonalInformation";
import Profile from "../templates/Profile";

const HV = () => {
  return (
    <ContainerWrapper>
      <PersonalInformation />
      <Profile />
    </ContainerWrapper>
  );
};

export default HV;
