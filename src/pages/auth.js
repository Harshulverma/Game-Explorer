import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Container, Row, Col } from "react-bootstrap";

const Auth = ({ mode }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {mode === "sign-in" ? <SignIn /> : <SignUp />}
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
