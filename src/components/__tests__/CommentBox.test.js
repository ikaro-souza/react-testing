import { mount } from "enzyme";
import React from "react";
import { Root } from "../../Root";
import { CommentBox } from "../CommentBox";

let wrappedComponent;
beforeEach(
  () =>
    (wrappedComponent = mount(
      <Root>
        <CommentBox />
      </Root>
    ))
);
afterEach(() => wrappedComponent.unmount());

it("has a text area and two button", () => {
  expect(wrappedComponent.find("textarea").length).toEqual(1);
  expect(wrappedComponent.find("button").length).toEqual(2);
});

// Groups tests that are more related than others
describe("the form functioning", () => {
  const testComment = "testComment";

  beforeEach(() =>
    update("textarea", "change", {
      target: {
        value: testComment,
      },
    })
  );

  it("has a text that handles change", () => {
    const foundComment = wrappedComponent.find("textarea").prop("value");
    expect(foundComment).toEqual(testComment);
  });

  it("has a form that handles submition", () => {
    update("form", "submit");

    const foundComment = wrappedComponent.find("textarea").prop("value");
    expect(foundComment).toEqual("");
  });
});

const update = (innerComponent, on, eventData) => {
  wrappedComponent.find(innerComponent).simulate(on, eventData);
  wrappedComponent.update();
};
