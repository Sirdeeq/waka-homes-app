import React from "react";
import tw from "tailwind-styled-components";

const ErrorFallback = tw.div`
  flex items-center justify-center h-screen
`;

const ErrorMessage = tw.h1`
  text-red-500 text-4xl font-bold
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback>
          <ErrorMessage>Something went wrong.</ErrorMessage>
        </ErrorFallback>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
