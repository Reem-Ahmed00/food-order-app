import React from "react";
import MealsList from "./components/MealsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MealsList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
