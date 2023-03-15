import { fireEvent, getByLabelText, getByRole, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import BookingForm from './components/bookingForm/BookingForm';
import { initializeTimes } from './pages/Reservations';
import userEvent from '@testing-library/user-event';


/*test('test to see if the expected times are in the document', () => {
  render(<BookingForm />);
  const expectedTimes = [
    '5:00pm EST',
    '5:30pm EST',
    '8:30pm EST',
    '10:30pm EST',
  
  ];
  const {getByTestId} = render(<BookingForm/>)
  const dateInput = getByTestId('date-test');
  fireEvent.change(dateInput, { target: { value: '2023-03-16' } });
  const { getByText } = render(
    <div>
      {initializeTimes().map((time) => (
        <div key={time}>{time}</div>
      ))}
    </div>
  );

  expectedTimes.forEach((time) => {
    expect(getByText(time)).toBeInTheDocument();
  });
});
*/


  test('available times are updated when the date is changed', () => {
    const mockAvailableTimes = ['5:00','10:00', '11:00'];
    const mockDispatch = jest.fn();
    const { getByTestId } = render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const dateInput = getByTestId('date-test');
    fireEvent.change(dateInput, { target: { value: '2023-03-20' } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-03-20' });
  });

  /*test('input of name matches types of text', () => {
  render(<BookingForm/>)
  const Name = getByLabelText('name')
  expect(Name).toHaveAttribute('type', 'text')
  });*/