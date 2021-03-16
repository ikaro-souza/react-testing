import { FETCH_COMMENTS, SAVE_COMMENT } from "../actions/types";

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    case FETCH_COMMENTS:
      return action.payload.map((comment) => comment.name);

    default:
      return state;
  }
};
