import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";


const altroDaScoprire = [
  { id: 1, title: "Esplora per genere" },
  { id: 2, title: "Decenni" },
  { id: 3, title: "Attività e stati d'animo" },
  { id: 4, title: "Worldwide" },
  { id: 5, title: "Classifiche" },
  { id: 6, title: "Audio spaziale" },
  { id: 7, title: "Video musicali" },
  { id: 8, title: "Nuovi artisti" },
  { id: 9, title: "Hit del passato" },
];

const ListaLink = function () {
  const [hover, setHover] = useState(null);
  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={3}>
        <Col xs={12} className="d-flex align-items-center gap-2 mb-3">
          <h5 className="m-0">Altro da esplorare</h5>
          <IoIosArrowForward className="fs-4 text-secondary" />
        </Col>
      </Row>
      <Row>
        <Row>
          {altroDaScoprire.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4} className="mb-2">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded-3"
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  backgroundColor: hover === item.id ? "#2a2a2a" : "#1c1c1e",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                <span className="text-danger">{item.title}</span>
                <IoIosArrowForward className="text-danger" />
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default ListaLink;
