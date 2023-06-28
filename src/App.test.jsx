
import {describe, expect, it} from "vitest"

import {  render, fireEvent, } from "@testing-library/react";
import BookingForm from "./components/BookingForm";





/*test('test to see if the expected times are in the document', () => {
  const expectedTimes = ['5:00pm EST','5:30pm EST','8:30pm EST','10:30pm EST',  ];

  const { getByTestId, getByText } = render(<BookingForm />);

  const dateInput = getByTestId('date-test');
  fireEvent.change(dateInput, { target: { value: '03-16-2023' } });

  expectedTimes.forEach((time) => {
    expect(getByText(time)).toBeInTheDocument();
  });
});

describe('BookingForm', () => {
  it('inputs are in the document; a data-testID is given to each label element', () => {
  
    const inputTestIds = ['name-test', 'email-test', 'date-test', 'time-test', 'guests-test', 'dining-test', 'button-test'];
    const { getByTestId } = render(<BookingForm />);

    inputTestIds.forEach((testId) => {
      const input = getByTestId(testId);
      expect(input).toBeInTheDocument();
    });
  });
});



  test('available times are updated when the date is changed', () => {
    const mockAvailableTimes = ['5:00','10:00', '11:00'];
    const mockDispatch = jest.fn();
    const { getByTestId } = render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const dateInput = getByTestId('date-test');
    fireEvent.change(dateInput, { target: { value: '2023-03-20' } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-03-20' });
  }); 

  test('Order Now button renders Menu Page', ()=> {
    render(<Highlights/>)
    const orderButton = screen.getByText('Order Now')
    userEvent.click(orderButton)

    waitFor(() => 
    expect(screen.getByText('Main Menu')).toBeInTheDocument()
    )
  })*/



describe('BookingForm', () => {
  it('inputs are in the document; a data-testID is given to each label element', () => {
  
    const inputTestIds = [
      'name-test', 
      'email-test', 
      'date-test', 
      'time-test', 
      'guests-test', 
      'dining-test', 
      'button-test'
    ];
    const { getByTestId } = render(<BookingForm />);

    inputTestIds.forEach((testId) => {
      const input = getByTestId(testId);
      expect(input).to.exist;
    });
  });
});

describe('when the date is chosen, a list of available unselected times are shown', () => {
  it('launches bookingpage on click'), () => {
    const expectedTimes = ['5:00pm EST','5:30pm EST','8:30pm EST','10:30pm EST',  ];

    const { getByTestId, getByText } = render(<BookingForm />);
  
    const dateInput = getByTestId('date-test');
    fireEvent.change(dateInput, { target: { value: '03-16-2023' } });
  
    expectedTimes.forEach((time) => {
      expect(getByText(time)).toBeInTheDocument();
  }) }
})



