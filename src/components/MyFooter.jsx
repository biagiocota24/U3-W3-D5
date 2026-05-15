import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  const links = [
    { id: 1, title: "Condizioni dei servizi internet" },
    { id: 2, title: "Apple Music e privacy" },
    { id: 3, title: "Avviso sui cookie" },
    { id: 4, title: "Supporto" },
    { id: 5, title: "Feedback" },
  ];

  return (
    <Container> 
      <Row>
        <Col xs={12} className="d-flex gap-3 mb-2">
          <a
            href="#"
            className="text-decoration-none small"
            style={{ color: "#888" }}
          >
            Italia
          </a>
          <a
            href="#"
            className="text-decoration-none small"
            style={{ color: "#888" }}
          >
            English (UK)
          </a>
        </Col>

        <Col xs={12} className="mb-2">
          <small style={{ color: "#555" }}>
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </small>
        </Col>

        <Col
          xs={12}
          className="d-flex flex-column flex-md-row flex-wrap gap-1 gap-md-3"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href="#"
              className="text-decoration-none small"
              style={{ color: "#555", whiteSpace: "nowrap" }}
            >
              {link.title}
            </a>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
