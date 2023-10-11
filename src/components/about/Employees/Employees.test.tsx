import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import AppProviders from "../../../context/AppProviders";
import { BrowserRouter } from "react-router-dom";
import Employees from "./Employees";
import { employeeData } from "./employeeData";

describe("Employees", () => {
  beforeEach(async () => {
    render(
      <AppProviders>
        <Provider store={store}>
          <BrowserRouter>
            <Employees />
          </BrowserRouter>
        </Provider>
      </AppProviders>
    );
  });
  it("Employees section sucessfully renders the employees from the data", () => {
    employeeData.forEach((employee) => {
      const name = screen.getByText(employee.name);
      expect(name).to.exist;
    });
  });
});
