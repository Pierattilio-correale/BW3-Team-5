import { useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Row,
  Spinner,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "../CSS/sidebar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";

const Details = function () {
  const profile = useSelector((state) => state.fetch.profile);
  const [data, setData] = useState(null);
  const [exp, setExp] = useState(null);
  const params = useParams();

  const profileDt = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${params.detID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella response");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Errore nella promise", err);
      });
  };

  useEffect(() => {
    profileDt();
  }, []);

  const expDt = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${params.detID}/experiences`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella response");
        }
      })
      .then((dataexp) => {
        setExp(dataexp);
      })
      .catch((err) => {
        console.log("Errore nella promise", err);
      });
  };

  useEffect(() => {
    expDt();
  }, []);

  if (!data) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner variant="danger" animation="border" />
      </div>
    );
  }

  return (
    <>
      <Container className="same-width-container mb-5">
        <Row>
          <Col sm={12}>
            <div className="bg-white shadow-sm mb-4 rounded">
              {/* Cover */}
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={data.image}
                  alt="cover"
                  className="w-100 h-100 object-fit-cover opacity-50"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Immagine profilo e dettagli */}
              <div
                className="px-4 pt-0 pb-4 position-relative"
                style={{ marginTop: "-50px" }}
              >
                <div className="d-flex align-items-end">
                  <img
                    src={data.image}
                    alt="Profile"
                    className="rounded-circle border border-3 border-white"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 mt-3">
                    <h4 className="mb-1">
                      {data.name} {data.surname}{" "}
                      <i className="bi bi-patch-check-fill text-primary"></i>
                    </h4>
                    <p className="mb-1">{data.title}</p>
                    <p className="text-muted mb-1">
                      {data.area} ·{" "}
                      <a href="#" className="text-decoration-none">
                        Informazioni di contatto
                      </a>
                    </p>
                    <p className="text-primary fw-semibold mb-0">
                      {Math.floor(Math.random() * 100) + 20} collegamenti
                    </p>
                  </div>
                </div>

                {/* Bottoni profilo */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Button variant="primary" className="rounded-pill">
                    Collegati
                  </Button>
                  <Button variant="outline-primary" className="rounded-pill">
                    <i className="bi bi-send"></i> Messaggio
                  </Button>
                  <Button variant="outline-primary" className="rounded-pill">
                    altro
                  </Button>
                </div>

                {/* Box info */}
                <div className="d-flex mt-4 flex-wrap gap-3">
                  <div
                    className="bg-light border p-3 rounded"
                    style={{ minWidth: "350px", maxWidth: "500px" }}
                  >
                    <strong>
                      {data.name === "Luca"
                        ? "Disponibile a oziare"
                        : "Disponibile a lavorare"}
                    </strong>
                    <p className="mb-1 small text-muted">{profile.title}</p>
                    <a href="#" className="text-primary small">
                      Mostra dettagli
                    </a>
                  </div>

                  <div
                    className="bg-light border p-3 rounded"
                    style={{ minWidth: "300px", maxWidth: "500px" }}
                  >
                    <p className="mb-1 small">
                      Fai sapere che stai facendo selezione e attrai candidati
                      qualificati.
                    </p>
                    <a href="#" className="text-primary small">
                      Inizia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="same-width-container mb-5">
        <Row>
          <Col sm={12}>
            <ListGroup className="mb-3">
              <ListGroup.Item>
                <h3 className="d-flex justify-content-between">Experience</h3>
              </ListGroup.Item>
              {exp?.map((exp) => (
                <ListGroupItem key={exp._id}>
                  <div className="d-flex">
                    {exp.image && (
                      <div className="mb-2">
                        <img
                          src={exp.image}
                          alt="Esperienza"
                          className="rounded-circle me-3"
                          style={{
                            width: "48px",
                            height: "48px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
                    <h5 className="mx-2">{exp.role}</h5>
                  </div>
                  <h6>Azienda e Località</h6>
                  <p>
                    {exp.company} - {exp.area}
                  </p>
                  <h6>Descrizione :</h6>
                  <p>{exp.description}</p>
                  <h6>Data :</h6>
                  <p>
                    data d'inizio:{" "}
                    {new Date(exp.startDate).toLocaleDateString("it-IT")}
                  </p>
                  <p>
                    data fine:{" "}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString("it-IT")
                      : "In corso"}
                  </p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
