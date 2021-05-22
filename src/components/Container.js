import React from "react";
import { Container } from "semantic-ui-react";

const ContainerWrapper = ({ children, ...props }) => {
  return (
    <Container
      as="div"
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      {...props}>
      {children}
    </Container>
  );
};

export default ContainerWrapper;
