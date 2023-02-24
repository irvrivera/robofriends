import React from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  return() {
    if (this.state.hasError) {
      return <h1> Oppps!!! That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
