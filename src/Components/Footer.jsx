import { Container, Row, Col, Dropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../CSS/footer.css";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";

const Footer = function () {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "Seleziona lingua"
  );

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <Container className="linkedin-footer mt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={2} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#link2" className="text-muted  text-decoration-none">
                  Informazioni
                </a>
              </li>
              <li className="mb-2">
                <a href="#link2" className="text-muted text-decoration-none">
                  Informativa sulla community professionale
                </a>
              </li>
              <li className="mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-muted text-decoration-none p-0"
                  >
                    Privacy e condizioni{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#privacy1">
                      Informativa sulla privacy
                    </Dropdown.Item>
                    <Dropdown.Item href="#privacy1">
                      Contratto di licenza
                    </Dropdown.Item>
                    <Dropdown.Item href="#privacy1">
                      Termini e condizioni delle pagine
                    </Dropdown.Item>
                    <Dropdown.Item href="#privacy1">
                      Informativa sui cookies
                    </Dropdown.Item>
                    <Dropdown.Item href="#privacy1">
                      Informativa sul copyright
                    </Dropdown.Item>

                    <Dropdown.Item href="#privacy3">
                      Opzioni relative all'Informativa sulla privacy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mb-2">
                <a href="#link4" className="text-muted text-decoration-none">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#link5" className="text-muted text-decoration-none">
                  Centro sicurezza
                </a>
              </li>
              <li className="mt-5 data">
                LinkedIn Corporation © {new Date().getFullYear()}
              </li>
            </ul>
          </Col>

          <Col sm={12} md={2} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#link6" className="text-muted text-decoration-none">
                  Accessibilità
                </a>
              </li>
              <li className="mb-4">
                <a href="#link7" className="text-muted text-decoration-none">
                  Carriera
                </a>
              </li>
              <li className="mb-2">
                <a href="#link8" className="text-muted text-decoration-none">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#link9" className="text-muted text-decoration-none">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={2} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#link10" className="text-muted text-decoration-none">
                  Talent Solutions
                </a>
              </li>
              <li className="mb-4">
                <a href="#link11" className="text-muted text-decoration-none">
                  Soluzioni di marketing
                </a>
              </li>
              <li className="mb-4">
                <a href="#link12" className="text-muted text-decoration-none">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#link13" className="text-muted text-decoration-none">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={2} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#link14" className="text-muted text-decoration-none">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-secondary me-2"
                  />
                  Domande?
                </a>
                <p> Visita il nostro Centro assistenza.</p>
              </li>
              <li className="mb-2">
                <a href="#link15" className="text-muted text-decoration-none">
                  <FontAwesomeIcon icon={faGear} />
                  Gestisci il tuo account e la tua privacy
                </a>
                <p> Vai alle impostazioni</p>
              </li>
              <li>
                <a href="#link16" className="text-muted text-decoration-none">
                  <FontAwesomeIcon
                    icon={faShield}
                    className="text-secondary me-2"
                  />
                  Trasparenza sui contenuti consigliati
                </a>
                <p> Scopri di più sui contenuti consigliati.</p>
              </li>
            </ul>
          </Col>

          <Col sm={12} md={2} className="mb-3">
            <p>Seleziona lingua</p>
            <Dropdown>
              <Dropdown.Toggle
                className="custom-dropdown-toggle text-start text-secondary"
                variant="light"
                id="dropdown-languages"
              >
                {selectedLanguage}
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-toggle">
                <Dropdown.Item onClick={() => handleLanguageChange("Italiano")}>
                  Italiano
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("English")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("Español")}>
                  Español
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("Deutsch")}>
                  Deutsch
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange("Português")}
                >
                  Português
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("Русский")}>
                  Русский
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("日本語")}>
                  日本語
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("中文")}>
                  中文
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col className="text-secondary mb-5"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
