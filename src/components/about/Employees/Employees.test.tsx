import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { MemoryRouter } from "react-router-dom";
import Employees from "./Employees";
import { employeeData } from "./employeeData";

describe("Employees", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Employees />
        </MemoryRouter>
      </Provider>
    );
  });
  it("Employees section sucessfully renders the employees from the data", () => {
    employeeData.forEach((employee) => {
      const name = screen.queryAllByText(employee.name);
      expect(name).to.exist;
    });
  });
});
