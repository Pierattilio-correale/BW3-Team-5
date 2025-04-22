import { Alert, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrayAction } from "../Redux/Action";
import { useEffect } from "react";

const Prova = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.fetch.profile);
  const isLoading = useSelector((state) => state.fetch.isLoading);
  const isError = useSelector((state) => state.fetch.isError);

  //   Metodo con useEffect (1)
  //   useEffect(() => {
  //     dispatch(
  //       fetchArrayAction("https://striveschool-api.herokuapp.com/api/profile/me")
  //     );
  //   }, [dispatch]);

  return (
    <>
      {/* metodo con il bottone (2) */}
      <h4>Prova componente</h4>
      {/* <Button
        onClick={() =>
          dispatch(
            fetchArrayAction(
              "https://striveschool-api.herokuapp.com/api/profile/me"
            )
          )
        }
      >
        Carica Profilo
      </Button> */}

      {isLoading && <Spinner variant="success" animation="border"></Spinner>}
      {isError && (
        <Alert variant="danger">Errore nel caricamento del profilo</Alert>
      )}

      {profile.name && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nome:</strong> {profile?.name}
          </p>
          <p>
            <strong>Cognome:</strong> {profile.surname}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Titolo:</strong> {profile.title}
          </p>
          <img src={profile.image} />
        </div>
      )}
    </>
  );
};

export default Prova;
