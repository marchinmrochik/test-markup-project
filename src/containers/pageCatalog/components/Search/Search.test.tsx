import '@testing-library/jest-dom'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { Search } from './index';
import { DELAY_SEARCH } from 'services/constants';

jest.useFakeTimers();

describe('Search component', () => {
  test('renders Search component', () => {
    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    // Assertions
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  test('handles input change and triggers search with delay', async () => {
    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    // Simulate input change
    fireEvent.change(screen.getByLabelText('Search'), { target: { value: 'test' } });

    // Wait for the delay
    await act(async () => {
      jest.advanceTimersByTime(DELAY_SEARCH);
      await waitFor(() => expect(mockOnSearch).toHaveBeenCalledWith('test'));
    });
  });

  test('handles form submission', async () => {
    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    // Simulate input change
    fireEvent.change(screen.getByLabelText('Search'), { target: { value: 'test' } });

    // Simulate form submission
    fireEvent.submit(screen.getByTestId('search-form'));

    // Wait for the delay
    await act(async () => {
      jest.advanceTimersByTime(DELAY_SEARCH);
      await waitFor(() => expect(mockOnSearch).toHaveBeenCalledWith('test'));
    });
  });
});
