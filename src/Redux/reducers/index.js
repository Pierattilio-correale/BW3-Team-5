import {
  FETCH_ARRAY_ACTION,
  FETCH_ARRAY_IS_ERROR,
  FETCH_ARRAY_IS_LOADING,
} from "../Action";

const initialState = {
  profile: {},
  isLoading: false,
  isError: false,
};

const fetchArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARRAY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_ARRAY_ACTION:
      return {
        ...state,
        profile: action.payload,
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
export default fetchArrayReducer;
