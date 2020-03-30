import React, { Component } from "react";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
