import React, { Component, ReactNode } from "react";
import { Block, Text } from "vcc-ui";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static displayName = "ErrorBoundary";
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <>
        <Block extend={{ textAlign: "center" }}>
          <Text>Hello world!</Text>
          <Text variant="bates">Nice to meet you :)</Text>
        </Block>
      </>
    ) : (
      children
    );
  }
}
