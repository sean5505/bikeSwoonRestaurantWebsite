import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { MemoryRouter } from "react-router-dom";
import Testimonials from "./Testimonials";
import { fireStoreDB} from "../../../firebase";
import {
  DocumentData,
  collection,
  getDocs,

} from "firebase/firestore";
import { act } from "react-dom/test-utils";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()



describe("Testimonials component", () => { //not exactly optimal...
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
          <Testimonials />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );
  });
  it("Testimonials section sucessfully renders the 'testimonials' from the DataBase", async () => {
    
    await act(async () => {
      async function getData() {
        const querySnapshot = await getDocs(
          collection(fireStoreDB, "testimonials")
        );
        return querySnapshot.docs.map((doc) => doc.data());
      }

      const dataFromSnapshot = await getData();

      await waitFor(() => {
        dataFromSnapshot.forEach((testimonial: DocumentData) => {
          const name = screen.queryAllByText(testimonial.name);
          expect(name).to.exist;
        });
      });
    });
  });
});
