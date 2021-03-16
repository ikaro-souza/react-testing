import { SAVE_COMMENT } from "../../actions/types";
import { commentsReducer } from "../comments";

it("handles action to save comment", () => {
  const comment = "testComment";
  const action = { type: SAVE_COMMENT, payload: comment };

  const state = commentsReducer([], action);
  expect(state).toContain(comment);
});
