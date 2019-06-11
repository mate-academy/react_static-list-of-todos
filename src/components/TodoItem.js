import React from "react";

export default class TodoItem extends React.Component {
  render() {
      return (
        <td>{this.props.todo}</td>
      );
  }
}
