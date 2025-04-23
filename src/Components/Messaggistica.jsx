import React, { useState } from "react"
import {
  InputGroup,
  Image,
  Dropdown,
  Form,
  Button,
  Collapse,
  Card,
  Modal,
} from "react-bootstrap"
import "../CSS/MessagingBar.css"

const Messaggistica = () => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showProfiles, setShowProfiles] = useState(false)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="messaging-bar">
      <div className="messaging-header">
        <div className="profile-circle">
          <Image
            src="https://www.firenzetoday.it/~media/horizontal-hi/27451125288350/schermata-2020-10-06-alle-18-05-04-2.jpg"
            alt="Profilo"
            roundedCircle
            className="profile-image"
          />
        </div>

        <Button
          variant="light"
          onClick={() => setOpen(!open)}
          aria-controls="messaging-body"
          aria-expanded={open}
          className="w-100 primoB d-flex justify-content-between"
        >
          Messaggistica
          <i className={`fa ${open ? "fa-chevron-down" : "fa-chevron-up"}`} />
        </Button>

        <Dropdown align="end">
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            <i className="fa fa-ellipsis-h" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Gestisci Conversazioni
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Impostazioni messaggistica
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Imposta messaggio di assenza
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Posta in arrivo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <>
          <Button
            variant="link"
            onClick={() => setShowProfiles(true)}
            className="p-0"
          >
            <i className="fa fa-edit" />
          </Button>

          <Modal
            show={showProfiles}
            onHide={() => setShowProfiles(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Profili</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {["Gigio", "Topo", "Topo Gigio", "Gigio Topo"].map(
                (name, index) => (
                  <div
                    key={index}
                    className="profile-info d-flex align-items-center mb-3"
                  >
                    <Image
                      src="https://www.firenzetoday.it/~media/horizontal-hi/27451125288350/schermata-2020-10-06-alle-18-05-04-2.jpg"
                      alt={name}
                      roundedCircle
                      className="profile-info-image me-2"
                    />
                    <span className="profile-name">{name}</span>
                  </div>
                )
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowProfiles(false)}
              >
                Chiudi
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>

      <Collapse in={open}>
        <div id="messaging-body">
          <Card className="secondB d-flex flex-column align-items-center text-center">
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i className="fa fa-search" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Cerca un nome"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </InputGroup>
              <div className="text-center">
                <Image
                  src="https://img.freepik.com/vettori-premium/concetto-di-dipendente-licenziato-dal-lavoro-perdita-di-lavoro-donna-licenziata-che-trasporta-scatola-con-le-sue-cose-vettore_187742-241.jpg"
                  alt="Placeholder chat"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <h2 className="text-center">Ancora nessun messaggio</h2>
              <p className="text-center">
                Entra in contatto e dai il via a una conversazione per far
                decollare la tua carriera
              </p>
              <Button className="bottone text-black">Invia un messaggio</Button>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </div>
  )
}

export default Messaggistica
