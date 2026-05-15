import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import SmallCard from "./cards/SmallCard";

const linkApi = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const artisti = ["eminem", "shakira", "vasco rossi"];

const NuoveUscite = function () {
  const [albums, setAlbums] = useState({});

  const chiamaCanzoni = (cerca) => {
    fetch(`${linkApi}${cerca}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("canzoni non trovate");
        }
      })
      .then((data) => {
        const unici = data.data.filter(
          (album, index, self) =>
            index === self.findIndex((a) => a.album.id === album.album.id),
        );

        setAlbums((prev) => ({ ...prev, [cerca]: unici }));
      })
      .catch((error) => {
        console.log("caricamento non riuscito", error);
      });
  };

  useEffect(() => {
    artisti.forEach((artista) => chiamaCanzoni(artista));
  }, []);

  return (
    <Container className="mt-4">
      {artisti.map((artista) => (
        <Row key={artista} className="mb-4">
          <Col xs={12} className="d-flex align-items-center gap-2 mb-3">
            <h5 className="m-0 text-white text-capitalize">{artista}</h5>
            <IoIosArrowForward className="fs-4 text-secondary" />
          </Col>
          <Col
            xs={12}
            className="d-flex flex-nowrap gap-3 overflow-auto pb-2 scroll-hidden"
          >
            {(albums[artista] || []).map((album) => (
              <div style={{ minWidth: "160px" }}>
                <SmallCard
                  key={album.album.id}
                  imgUrl={album.album.cover_medium}
                  title={album.album.title}
                />
              </div>
            ))}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default NuoveUscite;
