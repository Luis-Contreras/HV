import React from "react";
import ListItem from "../components/ListItem";
import TitleContent from "../components/TitleContent";
import { contactsData } from "../data";

const Contacts = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <TitleContent label="CONTACTOS" icon="address book outline" />
      {contactsData &&
        contactsData.map((item) => (
          <ListItem
            year={item.year}
            university={item.university}
            title={item.title}
          />
        ))}
    </div>
  );
};

export default Contacts;
