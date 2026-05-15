import { Container, Row, Col, Card } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import SmallCard from "./cards/SmallCard";

const NuoviEpisodi = function () {
  const canzoniStatiche = [
    { path: "src/assets/images/2a.png", title: "Prologo con Abuelo" },
    { path: "src/assets/images/2b.png", title: "The Wanderer" },
    { path: "src/assets/images/2c.png", title: "Michael Bublé & Carly Pearce" },
    {
      path: "src/assets/images/2d.png",
      title: "Stephan Moccio: The Zane Lowe Interview",
    },
    {
      path: "src/assets/images/2e.png",
      title: "Chart Spotlight : Julia Michaels",
    },
    { path: "src/assets/images/2f.png", title: "Non lo so" },
  ];
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} className="d-flex align-items-center gap-2 mb-3">
          <h5 className="m-0">Nuovi episodi radio</h5>
          <IoIosArrowForward className="fs-4 text-secondary" />
        </Col>
        <Col
          xs={12}
          className="d-flex flex-nowrap gap-3 overflow-auto pb-2 scroll-hidden"
        >
          {canzoniStatiche.map((canzone, index) => {
            return (
              <SmallCard
                key={index}
                imgUrl={canzone.path}
                title={canzone.title}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default NuoviEpisodi;
