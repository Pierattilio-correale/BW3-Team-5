import { useEffect } from "react";
import { fetchArrayExperience } from "../Redux/Action";
import { fetchArrayAction } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const pierattiliotoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NWRkM2Q0NTE4MTAwMTVjZTgzZDQiLCJpYXQiOjE3NDUzMTMyMzYsImV4cCI6MTc0NjUyMjgzNn0.1nb5bTwFZyxSFdHoFu9ITxAAdGeQ6LtV1ZolKHc4D88";

const ExperienceDelite = function () {
  const profile = useSelector((state) => state.fetch.profile);
  const experienceArray = useSelector((state) => state.company.experiences);
  const isLoading = useSelector((state) => state.company.isLoading);
  const isError = useSelector((state) => state.company.isError);
  const dispatch = useDispatch();
  const params = useParams();

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
        alert("Esperienza Eliminata!");
        // Ricarica le esperienze dopo aver eliminato una
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
      <Col>
        <ListGroup>
          {isLoading && (
            <div className="d-flex justify-content-center">
              <Spinner variant="primary" animation="border"></Spinner>
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
                <h5>{exp.role}</h5>
                <p>
                  {exp.company} - {exp.area}
                </p>
                <p>{exp.description}</p>
                <p>data d'inizio {exp.startDate}</p>
                <p>data fine : {exp.endDate || "In corso"}</p>
              </div>
              <div>
                <Button variant="danger" onClick={() => myDelete(exp._id)}>
                  <i class="bi bi-trash-fill"></i>
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </>
  );
};
export default ExperienceDelite;
