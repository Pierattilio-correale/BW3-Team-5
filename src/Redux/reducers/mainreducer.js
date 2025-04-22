import {
  FETCH_ARRAY_EXPERIENCE,
  FETCH_ARRAY_IS_ERROR,
  FETCH_ARRAY_IS_LOADING,
} from "../Action";

const initialState = {
  experience: [],
  isLoading: false,
  isError: false,
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARRAY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_ARRAY_EXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
        isLoading: false,
        isError: false,
      };

    case FETCH_ARRAY_IS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
