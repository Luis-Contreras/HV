import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const TitleContent = ({ icon, label }) => {
  return (
    <div style={{ width: "100%", textAlign: "-webkit-right" }}>
      <Header as="h2">
        <Icon name={icon} />
        <Header.Content>{label}</Header.Content>
      </Header>
      <Divider />
    </div>
  );
};

export default TitleContent;
