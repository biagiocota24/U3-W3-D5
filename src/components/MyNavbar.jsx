import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { CgHomeAlt } from "react-icons/cg";
import { IoIosRadio } from "react-icons/io";
import { BsGrid } from "react-icons/bs";

const MyNavbar = function () {
  const [espandi, setEspandi] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        className=" apple-sidebar"
        style={{ backgroundColor: "#222222" }}
        data-bs-theme="dark"
        expanded={espandi}
      >
        <Container fluid className="flex-lg-column align-items-lg-start p-0">
          <div className="d-flex d-lg-none align-items-center justify-content-between w-100 px-3">
            <RxHamburgerMenu
              className="text-danger fs-2"
              style={{ cursor: "pointer" }}
              onClick={() => setEspandi(!espandi)}
              aria-controls="basic-navbar-nav"
              aria-expanded={espandi}
            />
            <Navbar.Brand href="#" className="mx-auto">
              <img
                src="src/assets/logos/music.svg"
                alt="musica"
                style={{ filter: "invert(1)", height: "24px" }}
              />
            </Navbar.Brand>
            <Nav.Link href="#" className="text-danger p-0">
              Accedi
            </Nav.Link>
          </div>

          <div className="sidebar-top d-none d-lg-flex px-2">
            <img
              src="src/assets/logos/music.svg"
              alt="music-apple"
              style={{ filter: "invert(1)", height: "24px" }}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav " className="w-100">
            <InputGroup className="px-2 my-2">
              <button className="text-danger border border-1 bg-transparent rounded-start px-2">
                <FaSearch />
              </button>
              <FormControl className=" bg-transparent search-btn"></FormControl>
            </InputGroup>
            <Nav className="me-auto flex-lg-column w-100 px-2">
              <Nav.Link
                href="#home"
                className="d-flex align-items-center gap-2 "
              >
                <CgHomeAlt className="fs-5 text-danger" />
                <span>Home</span>
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="d-flex align-items-center gap-2 "
              >
                <BsGrid className="fs-5 text-danger"/>
                <span>Novità</span>
              </Nav.Link>
              <Nav.Link
                href="#radio"
                className="d-flex align-items-center gap-2 "
              >
                <IoIosRadio className="fs-5 text-danger"/>
                <span>Radio</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
