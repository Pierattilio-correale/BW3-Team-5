import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrayAction } from "../Redux/Action";
import { fetchArrayExperience } from "../Redux/Action";

const pierattiliotoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NWRkM2Q0NTE4MTAwMTVjZTgzZDQiLCJpYXQiOjE3NDUzMTMyMzYsImV4cCI6MTc0NjUyMjgzNn0.1nb5bTwFZyxSFdHoFu9ITxAAdGeQ6LtV1ZolKHc4D88";

const Experience = function () {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.fetch.profile);
  const experienceArray = useSelector((state) => state.company.experiences);
  const isLoading = useSelector((state) => state.fetch.isLoading);
  const isError = useSelector((state) => state.fetch.isError);
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
      fetchArrayAction("https://striveschool-api.herokuapp.com/api/profile/me")
    );
  }, [dispatch]);

  useEffect(() => {
    if (profile && profile._id) {
      dispatch(
        fetchArrayExperience(
          `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`
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
            `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`
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
    <>
      <Col sm={9} className="">
        <ListGroup className="mb-3 ms-3">
          <ListGroup.Item>
            <h3 className="d-flex justify-content-between">
              Experience
              <div>
                <a href="#" onClick={handleShow} className="text-dark me-4">
                  <i class="bi bi-plus-lg"></i>
                </a>
                <a href="#" className="text-dark mx-3">
                  <i
                    className="bi bi-pencil"
                    style={{ fontSize: "1.4rem" }}
                  ></i>
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
          {experienceArray?.map((exp) => (
            <ListGroupItem key={exp._id}>
              <h5>{exp.role}</h5>
              <p>
                {exp.company} - {exp.area}
              </p>
              <p>{exp.description}</p>
              <p>data d'inizio {exp.startDate}</p>
              <p>data fine : {exp.endDate || "In corso"}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </>
  );
};
export default Experience;
