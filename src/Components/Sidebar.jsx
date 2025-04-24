import { Button, Col, ListGroup } from "react-bootstrap";
import "../CSS/sidebar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.fetch.profile);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";
  const getProfile1 = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/680795d2d451810015ce83ee",
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
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("errore nella promis", err);
      });
  };
  useEffect(() => {
    getProfile1();
  }, []);
  const getProfile2 = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/68076152d451810015ce83d5",
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
          throw new Error("errore nella fetch");
        }
      })
      .then((data2) => {
        console.log(data2);
        setData2(data2);
      })
      .catch((err) => {
        console.log("errore nella promis", err);
      });
  };
  useEffect(() => {
    getProfile2();
  }, []);

  const getProfile3 = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/68075dd3d451810015ce83d4",
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
          throw new Error("errore nella fetch");
        }
      })
      .then((data3) => {
        console.log(data3);
        setData3(data3);
      })
      .catch((err) => {
        console.log("errore nella promis", err);
      });
  };
  useEffect(() => {
    getProfile3();
  }, []);

  function truncateText(text, maxLength = 63) {
    if (!text) return "";
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  }

  return (
    <Col sm={12} lg={3}>
      <ListGroup className="mb-3 ms-3">
        <ListGroup.Item>
          <h3 className="d-flex justify-content-between">
            Lingua del profilo <i className="bi bi-pen"></i>
          </h3>
          <p className="text-secondary">italiano</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3 className="d-flex justify-content-between">
            Profilo pubblico e URL <i className="bi bi-pen"></i>
          </h3>
          <p className="text-secondary">
            www.linkedin.com/in/{profile?.username}-{profile?._id}
          </p>
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="ms-3">
        <ListGroup.Item>
          <h6>Persone che potresti conoscere</h6>
          <p className="text-secondary">Dalla tua scuola o università</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-start">
            <img
              className="rounded-circle me-3"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
              src={data?.image || "http://placehold.it/48x48"}
              alt="Profile"
            />
            <div>
              <h6
                className="mb-0 name-hover"
                onClick={() => {
                  navigate("/details/" + data?._id);
                }}
              >
                {data?.name} {data?.surname}
              </h6>
              <p className="mb-1 small text-secondary">
                {truncateText(data?.title)}
              </p>
              <p className="mb-1 small text-secondary">
                {truncateText(data?.bio)}
              </p>
              <p className="mb-1 small text-secondary">📍 {data?.area}</p>
              <Button
                className="rounded-pill"
                variant="outline-secondary"
                size="sm"
              >
                <i className="bi bi-person-fill-add"></i> Collegati
              </Button>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-start">
            <img
              className="rounded-circle me-3"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
              src={data2?.image || "http://placehold.it/48x48"}
              alt="Profile"
            />
            <div>
              <h6
                className="mb-0 name-hover"
                onClick={() => {
                  navigate("/details/" + data2?._id);
                }}
              >
                {data2?.name} {data2?.surname}
              </h6>
              <p className="mb-1 small text-secondary">
                {truncateText(data2?.title)}
              </p>
              <p className="mb-1 small text-secondary">
                {truncateText(data2?.bio)}
              </p>
              <p className="mb-1 small text-secondary">📍 {data2?.area}</p>
              <Button
                className="rounded-pill"
                variant="outline-secondary"
                size="sm"
              >
                <i className="bi bi-person-fill-add"></i> Collegati
              </Button>
            </div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item>
          <div className="d-flex align-items-start">
            <img
              className="rounded-circle me-3"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
              src={data3?.image || "http://placehold.it/48x48"}
              alt="Profile"
            />
            <div>
              <h6
                className="mb-0 name-hover "
                onClick={() => {
                  navigate("/details/" + data3?._id);
                }}
              >
                {data3?.name} {data3?.surname}
              </h6>
              <p className="mb-1 small text-secondary">
                {truncateText(data3?.title)}
              </p>
              <p className="mb-1 small text-secondary">
                {truncateText(data3?.bio)}
              </p>
              <p className="mb-1 small text-secondary">📍 {data3?.area}</p>
              <Button
                className="rounded-pill"
                variant="outline-secondary"
                size="sm"
              >
                <i className="bi bi-person-fill-add"></i> Collegati
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
}

export default Sidebar;
