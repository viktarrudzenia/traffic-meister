import { render, fireEvent } from '@testing-library/react';

import TmButton from './index';

describe('TmButton', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<TmButton />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<TmButton>Test Button</TmButton>);
    const button = getByText('Test Button');
    expect(button).toBeInTheDocument();
  });

  it('handles onClick', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<TmButton onClick={handleClick}>Click me</TmButton>);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies additionalClassName correctly', () => {
    const { getByRole } = render(<TmButton additionalClassName="test-class">Test Button</TmButton>);
    const button = getByRole('button');

    expect(button).toHaveClass('test-class');
  });
});
