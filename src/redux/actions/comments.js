import axios from "axios";
import { FETCH_COMMENTS, SAVE_COMMENT } from "./types";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return dispatch({
    type: FETCH_COMMENTS,
    payload: response.data ? response.data.slice(0, 10) : [],
  });
};
