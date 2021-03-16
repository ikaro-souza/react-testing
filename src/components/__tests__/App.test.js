import { shallow } from "enzyme";
import React from "react";
import { App } from "../App";
import { CommentBox } from "../CommentBox";
import { CommentList } from "../CommentList";

let wrappedComponent;
beforeEach(() => (wrappedComponent = shallow(<App />)));
afterAll(() => wrappedComponent.unmount());

describe("renders content", () => {
  it("renders a CommentBox", () =>
    expect(wrappedComponent.find(CommentBox).length).toEqual(1));

  it("renders a CommentList", () =>
    expect(wrappedComponent.find(CommentList).length).toEqual(1));
});
