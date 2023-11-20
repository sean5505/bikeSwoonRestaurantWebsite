import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach} from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { MemoryRouter } from "react-router-dom";
import Employees from "./Employees";
import FetchFromDB from "../../utils/FetchFromDB";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

describe("Employees", async () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
          <Employees />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );
  });

  it("Employees section sucessfully renders the employees from the database", async () => {
    const dataFromSnapshot = await FetchFromDB("testimonials");
    await waitFor(() => {
      dataFromSnapshot?.forEach((employee) => {
        const name = screen.queryAllByText(employee.name);
        expect(name).to.exist;
      });
    });
  });
});
