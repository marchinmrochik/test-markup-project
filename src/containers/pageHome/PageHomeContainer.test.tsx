import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { PageHomeContainer } from './index';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from 'services/constants';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('PageHomeContainer component', () => {
  test('renders PageHomeContainer component', () => {
    render(<PageHomeContainer />);
    expect(screen.getByText('QRATES')).toBeInTheDocument();
  });

  test('handles button click and navigates to ABOUT page', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<PageHomeContainer />);

    // Simulate button click
    fireEvent.click(screen.getByText('START'));

    // Assertions
    expect(mockNavigate).toHaveBeenCalledWith(ROUTER.ABOUT);
  });
});
