import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";


describe("Booking Form", () => {
  let container : any, getByTestId : any;

  beforeEach(async () => {
    const mockDispatch = vi.fn();
    const mockSubmitForm = vi.fn();
    const renderResult = render(
      <BookingForm
        availableTimes={null}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    container = renderResult.container;
    getByTestId = renderResult.getByTestId;
  });

  it("BookingForm component exists", () => {
    expect(container).to.exist;
  });

  it("inputs are in the document; a data-testID is given to each label element", () => {
    const inputTestIds = [
      "name-test",
      "email-test",
      "date-test",
      "time-test",
      "guests-test",
      "dining-test",
      "button-test",
    ];

    inputTestIds.forEach((testId) => {
      const input = getByTestId(testId);
      expect(input.value).to.exist;
    });
  });

  /*it("Time updates based on value of dateInput", async () => {
    const dateInput = getByTestId('date-test');
  
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
  
    // Wait for the timeInput element to become available
    await waitFor(() => {
      const timeInput = getByTestId('time-test');
      expect(timeInput).not.toBeDisabled();
      
      // Simulate selecting a time
      fireEvent.change(timeInput, { target: { value: '5:00pm EST' } });
      
      // Assert that the time input value has been updated
      expect(timeInput.value).toEqual('5:00pm EST');
    });
  }) error must be in the way im calling teh function, since there is like 3 ways functiosn for updating time*/

  it("Name Input updates", async () => {
    const nameInput = getByTestId("name-test");
    fireEvent.change(nameInput, { target: { value: "Kyle Reeves" } });
    await waitFor(() => {
      expect(nameInput.value).toEqual("Kyle Reeves");
    });
  });

  it("Email Input updates", () => {
    const emailInput = getByTestId("email-test");
    fireEvent.change(emailInput, {
      target: { value: "emailTest07@yahoo.com" },
    });
    expect(emailInput.value).toEqual("emailTest07@yahoo.com");
  });

  it("Date Input updates", async () => {
    const dateInput = getByTestId("date-test");
    fireEvent.change(dateInput, { target: { value: "2023-10-01" } });
    await waitFor(() => {
      expect(dateInput.value).toEqual("2023-10-01");
    });
  });
  it("Guests content updates", () => {
    const guestInput = getByTestId("guests-test");
    fireEvent.change(guestInput, { target: { value: 3 } });
    expect(parseInt(guestInput.value, 10)).toEqual(3);
  });

  it("Dining content updates", () => {
    const diningInput = getByTestId("dining-test");
    fireEvent.change(diningInput, { target: { value: "Upper" } });
    expect(diningInput.value).toEqual("Upper");
  });
});
