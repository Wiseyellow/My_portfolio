import { render, screen } from '@testing-library/react';
import Header from './Header';



jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
      ...originalReact,
      useContext: jest.fn(() => ({ basename: 'mockValue' })),
  };
});


test('renders welcome paragraph', () => {
  render(<Header />);
  const paragraph = screen.getByText("Home");
  expect(paragraph).toBeInTheDocument();
});
