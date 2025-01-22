import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './Pages/BookingForm';

test('renders static text in BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockUpdateTimes = jest.fn();

  render(<BookingForm 
    availableTimes={mockAvailableTimes} 
    updateTimes={mockUpdateTimes} />);

  expect(screen.getByText('Choose date*')).toBeInTheDocument();
//   expect(screen.getByText('Choose time')).toBeInTheDocument();
//   expect(screen.getByText('Number of guests')).toBeInTheDocument();
//   expect(screen.getByText('Occasion')).toBeInTheDocument();
//   expect(screen.getByDisplayValue('Make Your Reservation')).toBeInTheDocument();
// });
