import { Button } from "react-bootstrap"
import { Col } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"

function Sidebar() {
  function truncateText(text, maxLength = 63) {
    if (!text) return ""
    return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text
  }
  return (
    <Col sm={12} lg={3}>
      <ListGroup className="mb-3 ms-3">
        <ListGroup.Item>
          <h3 className="d-flex justify-content-between">
            Lingua del profilo <i class="bi bi-pen"></i>
          </h3>
          <p className="text-secondary">italiano</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3 className="d-flex justify-content-between">
            Profilo pubblico e URL <i class="bi bi-pen"></i>
          </h3>
          <p className="text-secondary">
            www.linkedin.com/in/orso-black-627993361
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
              src="http://placecats.com/100/100"
              alt="Profile"
            />
            <div>
              <h6 className="mb-0">Luca Nobili</h6>
              <p className="mb-1 small text-secondary">
                {truncateText(
                  "security+ | BTL1 | EJPT | SOC | Analyst 1 livello @ istituto gsdkjghfskl"
                )}
              </p>
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
              src="http://placecats.com/400/400"
              alt="Profile"
            />
            <div>
              <h6 className="mb-0">Stefano Furnari</h6>
              <p className="mb-1 small text-secondary">
                {truncateText("Ethical Hacker @Wallife")}
              </p>
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
              src="http://placecats.com/200/200"
              alt="Profile"
            />
            <div>
              <h6 className="mb-0">Fabiana Cappelli</h6>
              <p className="mb-1 small text-secondary">
                {truncateText(
                  "🧩 Data Entry 🧩 Junior Data Analyst 🧩 assistente virtuale"
                )}
              </p>
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
              src="http://placecats.com/600/600"
              alt="Profile"
            />
            <div>
              <h6 className="mb-0">Luca Nobili</h6>
              <p className="mb-1 small text-secondary">
                {truncateText(
                  "security+ | BTL1 | EJPT | SOC | Analyst 1 livello @ istituto..."
                )}
              </p>
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
