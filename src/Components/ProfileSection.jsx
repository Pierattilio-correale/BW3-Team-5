import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner, Form } from "react-bootstrap";
import { fetchArrayAction } from "../Redux/Action";
import "../CSS/res.css";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.fetch.profile);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pierattiliotoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";

  if (!profile) return null;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("profile", selectedFile);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${pierattiliotoken}`,
          },
        }
      );

      if (response.ok) {
        alert("Immagine del profilo aggiornata con successo!");
        dispatch(
          fetchArrayAction(
            "https://striveschool-api.herokuapp.com/api/profile/me",
            pierattiliotoken
          )
        );
      } else {
        throw new Error("Errore durante il caricamento dell'immagine.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-white shadow-sm mb-4  rounded w-responsive">
      {/* Cover */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={profile.image}
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

        {/* Upload immagine profilo */}
        <div className="mt-3">
          <Form.Group controlId="formFile" className="mb-2">
            <Form.Label>Carica una nuova immagine profilo</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Button
            variant="outline-primary"
            onClick={handleImageUpload}
            disabled={!selectedFile || uploading}
            className="rounded-pill"
          >
            {uploading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Caricamento...
              </>
            ) : (
              "Carica immagine"
            )}
          </Button>
        </div>

        {/* Bottoni profilo */}
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
          <div className="flex-grow-1 flex-basis-0 p-3 border rounded bg-light">
            <strong>Disponibile a lavorare</strong>
            <p className="mb-1 small text-muted">{profile.title}</p>
            <a href="#" className="text-primary small">
              Mostra dettagli
            </a>
          </div>

          <div className="flex-grow-1 flex-basis-0 p-3 border rounded bg-light ">
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
