import ListGroup from "react-bootstrap/ListGroup"

function DefaultExample() {
  return (
    <ListGroup>
      <ListGroup.Item>
        <h2>
          Lingua del profilo <i class="bi bi-pen"></i>
        </h2>
        <p className="text-secondary">italiano</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <h2>
          Profilo pubblico e URL <i class="bi bi-pen"></i>
        </h2>
        <p className="text-secondary">
          www.linkedin.com/in/orso-black-627993361
        </p>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default DefaultExample
