import { saveComment } from "../comments";
import { SAVE_COMMENT } from "../types";

describe("saveComment action", () => {
  it("has the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("has the correct payload", () => {
    const comment = "testComment";
    const action = saveComment(comment);

    expect(action.payload).toEqual(comment);
  });
});
