import React from "react";
import ContainerWrapper from "../components/Container";
import Academy from "../templates/Academy";
import Contacts from "../templates/Contacts";
import Experiencie from "../templates/Experience";
import FeaturedWorks from "../templates/FeaturedWorks";
import Hobbies from "../templates/Hobbies";
import Lang from "../templates/Lang";
import PersonalInformation from "../templates/PersonalInformation";
import Profile from "../templates/Profile";
import Skills from "../templates/Skills";

const HV = () => {
  return (
    <ContainerWrapper>
      <PersonalInformation />
      <Profile />
      <Academy />
      <Experiencie />
      <FeaturedWorks />
      <Lang />
      <Skills />
      <Hobbies />
      <Contacts />
    </ContainerWrapper>
  );
};

export default HV;
