import { Card, Col, Container, Row } from "react-bootstrap";

const Novità = function () {
  return (
    <Container >
      <Row>
        <Col xs={12}>
          <h1 className="border-bottom border-secondary pb-2">Novità</h1>
        </Col>
      </Row>

      <Row>
        <Col
          xs={12}
          className="d-flex flex-nowrap gap-3 overflow-auto pb-2 scroll-hidden"
        >
          <Card className="bg-transparent border-0 text-white hero-card d-flex flex-column">
            <div className="mb-2">
              <span className="text-secondary text-uppercase fw-bold small">
                nuova stazione radio
              </span>
              <p className="mb-0">
                Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
              </p>
            </div>
            <img
              src="src/assets/images/1a.png"
              alt="Apple Music Chill"
              className="rounded-4 w-100 mt-auto"
            />
          </Card>

          <Card className="bg-transparent border-0 text-white hero-card d-flex flex-column">
            <div className="mb-2">
              <span className="text-secondary text-uppercase fw-bold small">
                nuova stazione radio
              </span>
              <p className="mb-0">Ecco la nuova casa della musica latina</p>
            </div>
            <img
              src="src/assets/images/1b.png"
              alt="Música Uno"
              className="rounded-4 w-100 mt-auto"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Novità;
