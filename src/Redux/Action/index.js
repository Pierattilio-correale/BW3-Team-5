export const FETCH_ARRAY_ACTION = "FETCH_ARRAY_ACTION";
export const FETCH_ARRAY_IS_LOADING = "FETCH_ARRAY_IS_LOADING";
export const FETCH_ARRAY_IS_ERROR = "FETCH_ARRAY_IS_ERROR";
export const FETCH_ARRAY_EXPERIENCE = "FETCH_ARRAY_EXPERIENCE";

export const fetchArrayAction = (endpoint, pierattiliotoken) => {
  return async (dispatch) => {
    // Endpoint del profilo =
    //   "https://striveschool-api.herokuapp.com/api/profile/me";

    //Endpoint Lista =
    // https://striveschool-api.herokuapp.com/api/profile/

    // Endpoint Specifico id
    // https://striveschool-api.herokuapp.com/api/profile/:userId

    // const pierattiliotoken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NWRkM2Q0NTE4MTAwMTVjZTgzZDQiLCJpYXQiOjE3NDUzMTMyMzYsImV4cCI6MTc0NjUyMjgzNn0.1nb5bTwFZyxSFdHoFu9ITxAAdGeQ6LtV1ZolKHc4D88";

    //felice token
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3OTVkMmQ0NTE4MTAwMTVjZTgzZWUiLCJpYXQiOjE3NDU0MDUyNDUsImV4cCI6MTc0NjYxNDg0NX0.GJvwjAhVtzbLVUz8nJ5IFt-ymk6kLeussOAZk9WV9VQ

    const andreatoken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDU3OWQ0NTE4MTAwMTVjZTgzY2QiLCJpYXQiOjE3NDUzMDcwNTUsImV4cCI6MTc0NjUxNjY1NX0.T2ztF0EcceV08HgbelOhBcrDNgP_xOKHw2GrBZn-vVc";

    const lucatoken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjE1MmQ0NTE4MTAwMTVjZTgzZDUiLCJpYXQiOjE3NDUzMTQxMzIsImV4cCI6MTc0NjUyMzczMn0.8K9oLOgDMxF4Td7298MAX4gg-vyxzWpxpFXXH4Q2MvM";

    dispatch({ type: FETCH_ARRAY_IS_LOADING });
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${pierattiliotoken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        dispatch({
          type: FETCH_ARRAY_ACTION,
          payload: data,
        });
      } else {
        throw new Error("errore nella promis");
      }
    } catch (error) {
      dispatch({
        type: FETCH_ARRAY_IS_ERROR,
      });
    }
  };
};

export const fetchArrayExperience = (endpoint, pierattiliotoken) => {
  return async (dispatch) => {
    //     - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences // Ritorna una lista di experiences
    // - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences // Crea una nuova experience. NOTA: ogni utente ha il permesso di creare/modificare solo le proprie esperienze
    // - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Ritorna una specifica experience
    // - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Modifica una specifica experience
    // - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Elimina una specifica experience

    // const pierattiliotoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NWRkM2Q0NTE4MTAwMTVjZTgzZDQiLCJpYXQiOjE3NDUzMTMyMzYsImV4cCI6MTc0NjUyMjgzNn0.1nb5bTwFZyxSFdHoFu9ITxAAdGeQ6LtV1ZolKHc4D88";
    dispatch({ type: FETCH_ARRAY_IS_LOADING });
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${pierattiliotoken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        dispatch({
          type: FETCH_ARRAY_EXPERIENCE,
          payload: data,
        });
      } else {
        throw new Error("errore nella promis");
      }
    } catch (error) {
      dispatch({
        type: FETCH_ARRAY_IS_ERROR,
      });
    }
  };
};
