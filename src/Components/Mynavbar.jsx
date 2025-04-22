import React, { useState, useRef, useEffect } from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import {
  FaUserCircle,
  FaChevronDown,
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import {
  Container,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

function MyNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const businessRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (businessRef.current && !businessRef.current.contains(event.target)) {
        setShowBusinessDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar expand="lg" className="bg-white border-bottom border-secondary py-0">
      <Container fluid>
        <Row className="d-flex w-100">
          <Col md={4} className="d-flex mt-1 ms-5 mt-2">
            <Navbar.Brand href="#" className="text-primary fs-1 ms-5 me-1 pt-0 mt-2">
              <FaLinkedin size={55} />
            </Navbar.Brand>

            <div className="position-relative me-2">
              <FaSearch className="position-absolute top-50 translate-middle-y ms-4 text-muted d-none d-lg-block" />
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="ps-5 mt-4 bg-secondary-subtle fs-5"
                aria-label="Search"
              />
            </div>
          </Col>

          <Col md={5} className="ms-5 ps-5 fs-6">
            <Nav
              className="ms-2 d-flex ps-2 mt-3 gap-5 py-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavItem icon={<FaHome size={40} className="glow-icon" />}  label="Home" />
              <NavItem icon={<FaUserFriends size={40} className="glow-icon"/>} label="Rete" />
              <NavItem icon={<FaBriefcase size={40} className="glow-icon" />} label="Lavoro" />
              <NavItem icon={<FaCommentDots size={40} className="glow-icon" />} label="Messaggistica" />
              <NavItem icon={<FaBell size={40} className="glow-icon" />} label="Notifiche" />

              <div ref={dropdownRef} className="position-relative">
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="d-flex flex-column align-items-center text-secondary mt-2"
                  style={{ cursor: "pointer" }}
                >
                  <FaUserCircle size={35} className="glow-icon" />
                  <div className="d-none d-lg-flex align-items-center gap-1 text-secondary-subtle mt-1 ">
                    <span>Tu</span>
                    <FaChevronDown size={10} />
                  </div>
                </div>

                {showDropdown && (
                  <div className="dropdown-menu show mt-2 shadow position-absolute end-0 p-3" style={{ width: "280px" }}>
                    <div className="d-flex align-items-center mb-3">
                      <FaUserCircle size={65} />
                      <div>
                        <div className="fw-bold ps-2">Luca Ferrara</div>
                        <div className="text-muted small">--</div>
                      </div>
                    </div>

                    <button className="btn btn-outline-primary w-100 mb-3 fw-semibold">
                      Visualizza profilo
                    </button>

                    <div className="mb-2 text-muted fw-semibold">Account</div>
                    <a href="#premium" className="d-flex align-items-start text-decoration-none mb-2">
                      <span className="me-2 mt-1">📦</span>
                      <span className="text-danger fw-semibold small">
                        Prova 1 mese di Premium per 0 EUR
                      </span>
                    </a>
                    <a href="#privacy" className="dropdown-item px-0">Impostazioni e privacy</a>
                    <a href="#guida" className="dropdown-item px-0">Guida</a>
                    <a href="#lingua" className="dropdown-item px-0 mb-2">Lingua</a>

                    <hr className="my-2" />

                    <div className="mb-2 text-muted fw-semibold">Gestisci</div>
                    <a href="#attivita" className="dropdown-item px-0">Post e attività</a>
                    <a href="#offerte" className="dropdown-item px-0 mb-2">Account per pubblicare offerte</a>

                    <hr className="my-2" />

                    <a href="#logout" className="dropdown-item px-0 text-muted">Esci</a>
                  </div>
                )}
              </div>
            </Nav>
          </Col>

          <Col md={2} className="d-flex text-secondary mt-2 border-start border-secondary ps-2 g-4">
            <div
              className="position-relative d-flex flex-column align-items-center text-secondary mt-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowBusinessDropdown(!showBusinessDropdown)}
              ref={businessRef}
            >
              <IoMdGrid size={35} className="mt-1 glow-icon" />
              <div className="d-none d-lg-flex align-items-center justify-content-center gap-1 mt-2">
                <span>Aziende</span>
                <FaChevronDown size={10} />
              </div>

              {showBusinessDropdown && (
                <div
                className="dropdown-menu show mt-5 shadow position-absolute end-0 p-3" 
                  style={{ width: "700px" }}
                >
                  <div className="d-flex">
                    <div className="me-5">
                      <div className="mb-3">
                        <strong>Talent</strong>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">🔍</div>
                          <span>Trova lead</span>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">👥</div>
                          <span>Gruppi</span>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">📊</div>
                          <span>Talent Insights</span>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">📨</div>
                          <span>Pubblica un’offerta di lavoro</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <strong>Vendite</strong>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">🧑‍💼</div>
                          <span>Trova i migliori freelance</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <strong>Marketing</strong>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">📣</div>
                          <span>Pubblicizza</span>
                        </div>
                      </div>

                      <div>
                        <strong>Learning</strong>
                        <div className="d-flex align-items-center mt-2">
                          <div className="me-2">🎓</div>
                          <span>Learning</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-3">
                        <div><strong>Assumi su LinkedIn</strong></div>
                        <small>Trova, attrai e assumi</small>
                      </div>
                      <div className="mb-3">
                        <div><strong>Vendi con LinkedIn</strong></div>
                        <a href="#vendita" className="text-decoration-underline small">Sblocca nuove opportunità di vendita</a>
                      </div>
                      <div className="mb-3">
                        <div><strong>Offerta di lavoro gratuita</strong></div>
                        <small>Ottieni rapidamente candidati qualificati</small>
                      </div>
                      <div className="mb-3">
                        <div><strong>Fai pubblicità su LinkedIn</strong></div>
                        <small>Acquisisci clienti e fai crescere la tua azienda</small>
                      </div>
                      <div className="mb-3">
                        <div><strong>Inizia con Premium</strong></div>
                        <small>Amplia e sfrutta la tua rete</small>
                      </div>
                      <div className="mb-3">
                        <div><strong>Impara con LinkedIn</strong></div>
                        <small>Corsi per formare i tuoi dipendenti</small>
                      </div>
                      <div className="mb-3">
                        <div><strong>Centro per amministratori</strong></div>
                        <small>Gestisci i dettagli di fatturazione e account</small>
                      </div>
                      <div className="mt-4">
                        <a href="#crea-pagina" className="fw-bold text-decoration-none">Crea una pagina aziendale +</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
            <a
  href="https://www.paypal.com/paypalme/lucaf95"
  className="dropdown-item text-danger text-decoration-underline ps-3"
  target="_blank"
  rel="noopener noreferrer"
>
  Prova Premium per 0 EUR <br />
  (Non è assolutamente un modo <br /> per inviare un bonifico a Luca)
</a>

            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

const NavItem = ({ icon, label }) => (
  <Nav.Link href="#!" className="d-flex flex-column align-items-center">
    {icon}
    <span className="d-none d-lg-block text-secondary">{label}</span>
  </Nav.Link>
);

export default MyNavbar;
