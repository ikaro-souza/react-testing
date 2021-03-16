import { mount } from "enzyme";
import React from "react";
import { StoreProvider } from "../../redux/Provider";
import { CommentList } from "../CommentList";

let wrappedComponent;
let initialState = {};
beforeEach(() => {
  initialState = {
    comments: ["comment1", "comment2"],
  };
  wrappedComponent = mount(
    <StoreProvider initialState={initialState}>
      <CommentList />
    </StoreProvider>
  );
});
afterEach(() => wrappedComponent.unmount());

it("creates one <li> for each comment", () => {
  expect(wrappedComponent.find("li").length).toEqual(
    initialState.comments.length
  );
});

it("shows the text of each comment", () => {
  expect(wrappedComponent.render().text()).toContain(initialState.comments[0]);
  expect(wrappedComponent.render().text()).toContain(initialState.comments[1]);
});
