import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info to an error reporting service here
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div role="alert">Something went wrong: {this.state.error?.message || 'Unknown error'}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 