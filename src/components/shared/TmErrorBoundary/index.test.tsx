import { render } from '@testing-library/react';

import TmErrorBoundary from './';

describe('TmErrorBoundary', () => {
  it('renders without crashing', () => {
    const GoodComponent = () => <div>Everything is fine!</div>;
    const { getByText } = render(
      <TmErrorBoundary>
        <GoodComponent />
      </TmErrorBoundary>
    );
    const goodComponent = getByText('Everything is fine!');
    expect(goodComponent).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <TmErrorBoundary>
        <ErrorComponent />
      </TmErrorBoundary>
    );

    const errorMessage = getByText('Oops, there is an error!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays custom error message when provided', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <TmErrorBoundary errorTextDescription="Custom error message">
        <ErrorComponent />
      </TmErrorBoundary>
    );

    const errorMessage = getByText('Custom error message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays the correct button text', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <TmErrorBoundary errorBtnText="Custom button text">
        <ErrorComponent />
      </TmErrorBoundary>
    );

    const button = getByText('Custom button text');
    expect(button).toBeInTheDocument();
  });
});
