import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import SmallCard from "./cards/SmallCard";
import SmallCardLoader from "./cards/PlaceholderCards";

const linkApi = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const artisti = ["eminem", "vasco rossi", "snoop dog", "notorius big"];

const NuoveUscite = function () {
  const [albums, setAlbums] = useState({});
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
      <Col xs={12} className="d-flex align-items-center gap-2 mb-3">
        <h5 className="m-0 text-white text-capitalize">Nuove uscite</h5>
        <IoIosArrowForward className="fs-4 text-secondary" />
      </Col>

      {artisti.map((artista) => (
        <Row key={artista} className="mb-4">
          <Col
            xs={12}
            className="d-flex flex-nowrap gap-3 overflow-auto pb-2 scroll-hidden"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SmallCardLoader key={i} />
                ))
              : (albums[artista] || []).map((album) => (
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
