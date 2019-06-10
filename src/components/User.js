import React from "react";

export default class User extends React.Component {
  render() {
    return (
        <td>{this.props.name}</td>
    );
  }
}
