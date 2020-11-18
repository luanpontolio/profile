import { Component } from 'react';

export default class extends Component {
  static getInitialProps({ query }) {
    return { name: query.name };
  }

  render () {
    return (
      <>
        <h1>About</h1>
        <p>Hi ... I'm {this.props.name}</p>
      </>
    )
  }
}
