import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Lavoro = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?search=developer"
        );
        if (response.ok) {
          const { data } = await response.json();
          const filteredJobs = data.filter(
            (job) =>
              job.candidate_required_location &&
              job.candidate_required_location
                .toLowerCase()
                .includes("europe only")
          );

          //  Log per verifica
          console.log(
            "Risultati filtrati Europe Only:",
            filteredJobs.map((job) => ({
              title: job.title,
              company: job.company_name,
              location: job.candidate_required_location,
            }))
          );

          setJobs(filteredJobs);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Errore nel recupero dei dati:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Container className="mt-4 d-flex align-items-center justify-content-center">
        {" "}
        <Spinner animation="border" variant="primary" />
        <span className="ms-2">Caricamento offerte di lavoro...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          Errore nel caricamento delle offerte di lavoro
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary">
        Jobs consigliati in base al tuo profilo di Dev supremo{" "}
      </h2>
      <p className="text-center text-primary">
        Offerte di lavoro come developer (Europe only)
      </p>
      {jobs.length === 0 && (
        <Alert variant="warning">
          Nessuna posizione trovata per "Europe Only".
        </Alert>
      )}
      {jobs.map((job) => (
        <Row
          key={job._id}
          className="mx-0 my-3 p-3"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col xs={3} className="d-flex align-items-center">
            <FaStar color="gold" className="me-2" />
            <Link to={`/${job.company_name}`} className="text-decoration-none">
              {job.company_name}
            </Link>
          </Col>
          <Col xs={9}>
            <a
              href={job.url}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-dark"
            >
              {job.title}
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Lavoro;
