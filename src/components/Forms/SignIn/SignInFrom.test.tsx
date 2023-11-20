import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { beforeEach,  describe,  expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SignInForm from "./SignInForm";


// FOR THE SIGN IN FORM  USE CYPRESS INSTEAD OF VITEST, CYPRESS UTILIZES MOCHA / CHAI
describe("SignInForm Functionality", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignInForm />
        </MemoryRouter>
      </Provider>
    );
  });

  it("onClick of login button, it becomes disabled", () => {
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(loginButton).toBeDisabled();
  });

  it("inputs are in document", () => {
    const emailInput = screen.getByTestId("email-test");
    expect(emailInput).to.exist;
    const passwordInput = screen.getByTestId("password-test");
    expect(passwordInput).to.exist;
  });

  
});
