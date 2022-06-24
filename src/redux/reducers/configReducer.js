import { SET_LOADING } from "../const/configConst";

const initState = {
  isLoading: false,
};

const configReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export default configReducer;
