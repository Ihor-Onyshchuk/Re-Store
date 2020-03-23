import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class ErrorBoudry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
