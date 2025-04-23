import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ScrollActionBar = () => {
  const [showBar, setShowBar] = useState(false);
  const profile = useSelector((state) => state.fetch.profile);

  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBar || !profile) return null;

  return (
    <Row className="scroll-action-bar d-none d-md-flex align-items-center justify-content-between px-4 py-2 shadow-sm bg-white position-fixed top-0 w-100 z-3">
      <Col md={4} className="d-flex align-items-center fs-5 ps-5 ms-5">
        <img
          src={profile.image}
          alt="User"
          className="rounded-circle me-2"
          width={50}
          height={50}
        />
        <div>
          <div className="fw-bold">{profile.name} {profile.surname}</div>
          <div className="text-muted small">{profile.title}</div>
        </div>
      </Col>

      <Col md={7} className="d-flex justify-content-end gap-4 fs-4 me-3 pe-3">
        <Button variant="outline-primary" size="lg">Altro</Button>
        <Button variant="outline-primary" size="lg">Messaggio</Button>
        <Button variant="primary" size="lg">
          <i className="bi bi-person-plus-fill me-1"></i>Collegati
        </Button>
      </Col>
    </Row>
  );
};

export default ScrollActionBar;
