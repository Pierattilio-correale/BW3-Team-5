import { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Modal,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrayAction } from "../Redux/Action";
import { fetchArrayExperience } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import "../CSS/res.css";

const pierattiliotoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";

const Experience = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state) => state.fetch.profile);
  const experienceArray = useSelector((state) => state.company.experiences);
  const isLoading = useSelector((state) => state.company.isLoading);
  const isError = useSelector((state) => state.company.isError);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    dispatch(
      fetchArrayAction(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc"
      )
    );
  }, [dispatch]);

  useEffect(() => {
    if (profile && profile._id) {
      dispatch(
        fetchArrayExperience(
          `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc"
        )
      );
    }
  }, [dispatch, profile]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const FormPUT = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pierattiliotoken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Esperienza salvata!");
        handleClose();
        dispatch(
          fetchArrayExperience(
            `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc"
          )
        );
      } else {
        throw new Error("Errore nel salvataggio");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ListGroup className="mb-3 shadow-sm rounded w-responsive">
      <ListGroup.Item>
        <h3 className="d-flex justify-content-between">
          Experience
          <div>
            <a href="#" onClick={handleShow} className="text-dark me-4">
              <i className="bi bi-plus-lg"></i>
            </a>
            <a
              className="text-dark mx-3"
              onClick={() => {
                navigate("/experience/" + profile._id);
              }}
            >
              <i className="bi bi-pencil" style={{ fontSize: "1.4rem" }}></i>
            </a>
          </div>
        </h3>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi la tua esperienza!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Qualifica</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="es.Programmatore"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Azienda o Organizzatore</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="azienda"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </Form.Group>

              <div className="d-flex justify-content-between mx-3 mb-3">
                <Form.Group className="me-2 flex-fill">
                  <Form.Label>Data inizio</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        startDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="ms-2 flex-fill">
                  <Form.Label>Data fine</Form.Label>
                  <Form.Control
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        endDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="es.Milano"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="es.Milano"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <a
              className="btn btn-primary rounded-5 pt-1 px-3"
              onClick={FormPUT}
            >
              Save
            </a>
          </Modal.Footer>
        </Modal>
      </ListGroup.Item>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner variant="primary" animation="border"></Spinner>
        </div>
      )}
      {isError && (
        <Alert variant="danger">Errore nel recupero della lista</Alert>
      )}

      {experienceArray?.map((exp) => (
        <ListGroupItem key={exp._id}>
          <div className="d-flex ">
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
          <p>
            {exp.company} - {exp.area}
          </p>
          <p>{exp.description}</p>
          <p>
            data d'inizio: {new Date(exp.startDate).toLocaleDateString("it-IT")}
          </p>
          <p>
            data fine:{" "}
            {exp.endDate
              ? new Date(exp.endDate).toLocaleDateString("it-IT")
              : "In corso"}
          </p>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const fileInput = e.target.elements[`expImage-${exp._id}`];
              const file = fileInput.files[0];
              if (!file) {
                alert("Seleziona un file!");
                return;
              }

              const formData = new FormData();
              formData.append("experience", file);

              fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${exp._id}/picture`,
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${pierattiliotoken}`,
                  },
                  body: formData,
                }
              )
                .then((response) => {
                  if (response.ok) {
                    alert("Immagine caricata con successo!");

                    dispatch(
                      fetchArrayExperience(
                        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc"
                      )
                    );
                  } else {
                    throw new Error("Errore durante l'upload dell'immagine.");
                  }
                })
                .catch((error) => {
                  console.error("Errore:", error);
                });
            }}
          >
            <Form.Group controlId={`expImage-${exp._id}`} className="mb-2 mt-3">
              <Form.Label>Carica immagine per questa esperienza</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
            <button type="submit" className="btn btn-outline-primary btn-sm">
              Upload
            </button>
          </Form>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Experience;
