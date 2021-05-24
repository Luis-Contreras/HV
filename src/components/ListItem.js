import React from "react";
import { Divider, Grid, Segment, Header } from "semantic-ui-react";

const ListItem = ({ year, university, title }) => {
  return (
    <Segment
      style={{ marginLeft: "60px", height: "130px", marginBottom: "40px" }}>
      <Grid relaxed="very">
        <Grid.Column style={{ marginLeft: "40px" }}>
          <Header as="h3">{university}</Header>
          <Header as="h4">{title}</Header>
        </Grid.Column>
      </Grid>
      <Divider vertical>{year}</Divider>
    </Segment>
  );
};

export default ListItem;
