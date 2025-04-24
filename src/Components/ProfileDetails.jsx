import { ListGroup, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProfileDetails() {
  const profile = useSelector((state) => state.fetch.profile);
  return (
    <div className="mx-3 shadow-sm rounded w-responsive">
      {/* Attività */}
      <ListGroup className="mb-3">
        <ListGroup.Item>
          <h6 className="fw-bold mb-1">Attività</h6>
          <p className="text-secondary mb-1">0 follower</p>
          <p className="text-secondary mb-1">
            {profile.name} non ha ancora pubblicato nulla
          </p>
          <Button variant="link" className="p-0 text-decoration-none">
            Mostra tutte le attività →
          </Button>
        </ListGroup.Item>
      </ListGroup>

      {/* Formazione */}
      <ListGroup className="mb-3">
        <ListGroup.Item>
          <h6 className="fw-bold mb-2">Formazione</h6>
          <div className="d-flex align-items-center">
            <Image
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
              alt="EPICODE"
              style={{ width: "32px", height: "32px", marginRight: "10px" }}
            />
            <div>
              <strong className="d-block">EPICODE</strong>
              <small className="text-secondary">2024 - 2025</small>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>

      {/* Interessi */}
      <ListGroup className="d-flex">
        <ListGroup.Item>
          <h6 className="fw-bold mb-2">Interessi</h6>
          <div className="d-flex mb-2">
            <Button
              variant="link"
              className="p-0 me-3 text-success fw-bold text-decoration-none"
            >
              Aziende
            </Button>
            <Button
              variant="link"
              className="p-0 text-secondary text-decoration-none"
            >
              Scuole o università
            </Button>
          </div>

          {/* Interest 1 */}
          <div className="d-flex mb-3">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQH_sxPLw-Vfjw/company-logo_200_200/company-logo_200_200/0/1630574580547/linkedin_notizie_logo?e=2147483647&v=beta&t=4NZLVtRQ3Cn3dpXx6Mnd4zWdV1qzKb6IAU_XLo_DTsQ"
              alt="LinkedIn Notizie"
              roundedCircle
              style={{ width: "48px", height: "48px", marginRight: "10px" }}
            />
            <div>
              <strong className="d-block">LinkedIn Notizie</strong>
              <small className="text-secondary">1.034.177 follower</small>
              <div>
                <Button variant="outline-dark" size="sm" className="mt-1">
                  + Segui
                </Button>
              </div>
            </div>
          </div>

          {/* Interest 2 */}
          <div className="d-flex">
            <Image
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
              alt="EPICODE"
              roundedCircle
              style={{ width: "48px", height: "48px", marginRight: "10px" }}
            />
            <div>
              <strong className="d-block">EPICODE</strong>
              <small className="text-secondary">19.220 follower</small>
              <div>
                <Button variant="outline-dark" size="sm" className="mt-1">
                  + Segui
                </Button>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ProfileDetails;
