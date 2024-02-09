import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import { Timer } from './index';
import { useNavigate } from 'react-router-dom';

jest.useFakeTimers();

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), 
}));

describe('Timer component', () => {
  test('renders Timer component', () => {
    render(<Timer duration={60} redirectUrl="/redirect" />);
    expect(screen.getByText('01:00')).toBeInTheDocument();
  });

  test('updates time remaining and redirects when time is up', async () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<Timer duration={5} redirectUrl="/redirect" />);

    // Assertions before time elapses
    expect(screen.getByText('00:05')).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();

    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Assertions after time elapses
    await waitFor(() => {
      expect(screen.getByText('00:00')).toBeInTheDocument();
      expect(mockNavigate).toHaveBeenCalledWith('/redirect');
    });
  });
});
