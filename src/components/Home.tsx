import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="text-center">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1>Welcome in our TypeScript App</h1>
        </Col>
        <Col xs={12} md={8}>
          <Link to="/class">go to Class Component</Link>
        </Col>
        <Col xs={12} md={8}>
          <Link to="/functional">go to Functional Component</Link>
        </Col>
        <Col xs={12} md={8}>
          <Link to="/form">go to Form Component</Link>
        </Col>
        <Col xs={12} md={8}>
          <Link to="/fetch">go to Fetch Component</Link>
        </Col>
        <Col xs={12} md={8}>
          <Link to="/dynamic/27398/1238712">go to Dynamic Component</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
