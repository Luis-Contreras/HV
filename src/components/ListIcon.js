import React from "react";
import { List, Icon } from "semantic-ui-react";

const ListIcon = ({ text, link }) => {
  return (
    <List style={{ marginLeft: "30px", marginBottom: "30px" }}>
      <List.Item>
        <Icon size="big" name="idea" />
        <List.Content>
          <p style={{ fontSize: "large" }}>{text}</p>
          <a style={{ fontSize: "large" }} href={link}>
            {link}
          </a>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ListIcon;
