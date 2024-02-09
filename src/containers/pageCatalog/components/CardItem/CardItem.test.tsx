import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { CardItem } from './index';

test('renders CardItem component', () => {
  const mockToggleLike = jest.fn();
  
  const cardData = {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    image_url: 'test-image-url',
    like: false,
    onToggleLike: mockToggleLike,
  };

  render(<CardItem {...cardData} />);

  // Assertions
  expect(screen.getByRole('article')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Test Title/i })).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
  expect(screen.getByAltText('like')).toBeInTheDocument();

  // Simulate like button click
  fireEvent.click(screen.getByAltText('like'));

  console.log(mockToggleLike.mockReturnValue)


  // Expect that onToggleLike function has been called with the correct parameters
  expect(mockToggleLike).toHaveBeenCalledWith('1', true);

});
