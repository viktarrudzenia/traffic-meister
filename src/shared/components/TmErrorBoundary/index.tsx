'use client';
import { Component, ErrorInfo, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
  errorTextDescription?: string;
  errorBtnText?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class TmErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether there is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    const { errorTextDescription = 'Oops, there is an error!', errorBtnText = 'Try again?' } =
      this.props;

    if (this.state.hasError) {
      return (
        <div className={styles.TmErrorBoundary__wrapper}>
          <h2>{errorTextDescription}</h2>
          <button
            className={styles.TmErrorBoundary__button}
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            {errorBtnText}
          </button>
        </div>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default TmErrorBoundary;
