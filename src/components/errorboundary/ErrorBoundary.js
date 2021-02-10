import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorInfo}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
