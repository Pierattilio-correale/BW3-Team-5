import { Button, Col, ListGroup } from "react-bootstrap"
import "../CSS/sidebar.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchArrayAction } from "../Redux/Action"

function Sidebar() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.fetch.profile)

  useEffect(() => {
    dispatch(
      fetchArrayAction("https://striveschool-api.herokuapp.com/api/profile/me")
    )
  }, [dispatch])

  function truncateText(text, maxLength = 63) {
    if (!text) return ""
    return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text
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
              src={profile?.image || "http://placehold.it/48x48"}
              alt="Profile"
            />
            <div>
              <h6 className="mb-0 name-hover">
                {profile?.name} {profile?.surname}
              </h6>
              <p className="mb-1 small text-secondary">
                {truncateText(profile?.title)}
              </p>
              <p className="mb-1 small text-secondary">
                {truncateText(profile?.bio)}
              </p>
              <p className="mb-1 small text-secondary">📍 {profile?.area}</p>
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
  )
}

export default Sidebar
