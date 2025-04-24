import { useEffect, useState } from "react";
import { fetchArrayExperience, fetchArrayAction } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Spinner,
  Modal,
  Form,
} from "react-bootstrap";

const pierattiliotoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";

const ExperienceDelite = function () {
  const profile = useSelector((state) => state.fetch.profile);
  const experienceArray = useSelector((state) => state.company.experiences);
  const isLoading = useSelector((state) => state.company.isLoading);
  const isError = useSelector((state) => state.company.isError);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editFormData, setEditFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [currentExpId, setCurrentExpId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const myDelete = async (expID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${expID}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${pierattiliotoken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Esperienza eliminata!");
        dispatch(
          fetchArrayExperience(
            `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc"
          )
        );
      } else {
        throw new Error("Errore nella cancellazione");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (expID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${expID}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${pierattiliotoken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );
      if (response.ok) {
        alert("Esperienza aggiornata!");
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
    <Col>
      <ListGroup>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner variant="primary" animation="border" />
          </div>
        )}
        {isError && (
          <Alert variant="danger">Errore nel recupero della lista</Alert>
        )}
        {experienceArray?.map((exp) => (
          <ListGroupItem
            key={exp._id}
            className="d-flex justify-content-between"
          >
            <div>
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
                data d'inizio:{" "}
                {new Date(exp.startDate).toLocaleDateString("it-IT")}
              </p>
              <p>
                data fine:{" "}
                {exp.endDate
                  ? new Date(exp.endDate).toLocaleDateString("it-IT")
                  : "In corso"}
              </p>
            </div>
            <div>
              <a
                href="#"
                onClick={() => {
                  setEditFormData(exp);
                  setCurrentExpId(exp._id);
                  handleShow();
                }}
                className="text-dark me-4"
              >
                <i className="bi bi-pencil" style={{ fontSize: "1.4rem" }}></i>
              </a>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                value={editFormData.role}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, role: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                value={editFormData.company}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, company: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data Inizio</Form.Label>
              <Form.Control
                type="date"
                value={editFormData.startDate}
                onChange={(e) =>
                  setEditFormData({
                    ...editFormData,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data Fine</Form.Label>
              <Form.Control
                type="date"
                value={editFormData.endDate}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, endDate: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                value={editFormData.area}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, area: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editFormData.description}
                onChange={(e) =>
                  setEditFormData({
                    ...editFormData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => myDelete(currentExpId)}>
            <i className="bi bi-trash-fill"></i> Elimina
          </Button>
          <Button variant="primary" onClick={() => handleEdit(currentExpId)}>
            Salva Modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ExperienceDelite;
