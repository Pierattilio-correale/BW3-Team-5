import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ProfileSection = () => {
  const profile = useSelector((state) => state.fetch.profile);

  return (
    <div className="bg-white shadow-sm mb-4 rounded ">
      {/* Cover */}
      <div
        style={{
          height: "200px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://placedog.net/1000/1000"
          alt="cover"
          className="w-100 h-100 object-fit-cover opacity-50"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Immagine profilo e dettagli */}
      <div
        className="px-4 pt-0 pb-4 position-relative"
        style={{ marginTop: "-50px" }}
      >
        <div className="d-flex align-items-end">
          <img
            src={profile.image}
            alt="Profile"
            className="rounded-circle border border-3 border-white"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <div className="ms-3 mt-3">
            <h4 className="mb-1">
              {profile.name} {profile.surname}{" "}
              <i className="bi bi-patch-check-fill text-primary"></i>
            </h4>
            <p className="mb-1">{profile.title}</p>
            <p className="text-muted mb-1">
              {profile.area} ·{" "}
              <a href="#" className="text-decoration-none">
                Informazioni di contatto
              </a>
            </p>
            <p className="text-primary fw-semibold mb-0">
              {Math.floor(Math.random() * 100) + 20} collegamenti
            </p>
          </div>
        </div>

        {/* Bottoni */}
        <div className="d-flex flex-wrap gap-2 mt-3">
          <Button variant="primary" className="rounded-pill">
            Disponibile per
          </Button>
          <Button variant="outline-primary" className="rounded-pill">
            Aggiungi sezione del profilo
          </Button>
          <Button variant="outline-primary" className="rounded-pill">
            Migliora profilo
          </Button>
          <Button variant="outline-secondary" className="rounded-pill">
            Altro
          </Button>
        </div>

        {/* Box disponibili a lavorare  ecc*/}
        <div className="d-flex mt-4 flex-wrap gap-3 ">
          <div
            className="bg-light border p-3 rounded "
            style={{ minWidth: "350px", maxWidth: "500px" }}
          >
            <strong>Disponibile a lavorare</strong>
            <p className="mb-1 small text-muted">{profile.title}</p>
            <a href="#" className="text-primary small">
              Mostra dettagli
            </a>
          </div>

          <div
            className="bg-light border p-3 rounded  "
            style={{ minWidth: "300px", maxWidth: "500px" }}
          >
            <p className="mb-1 small">
              Fai sapere che stai facendo selezione e attrai candidati
              qualificati.
            </p>
            <a href="#" className="text-primary small">
              Inizia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
