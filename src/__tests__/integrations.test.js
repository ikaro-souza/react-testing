import { mount } from "enzyme";
import moxios from "moxios";
import React from "react";
import { App } from "../components";
import { Root } from "../Root";
import { mockedComments } from "../_config/mocks/comments";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: mockedComments,
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetchs a list of comments and display them", (done) => {
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );

  wrappedComponent.find("#fetch-comments").simulate("click");

  moxios.wait(() => {
    wrappedComponent.update();

    expect(wrappedComponent.find("li").length).toBeGreaterThan(0);
    done();

    wrappedComponent.unmount();
  });
});
