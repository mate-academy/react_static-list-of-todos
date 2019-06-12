import React from "react";
import User from "../components/User";

export default class TodoItem extends React.Component {
  render() {
    return (
      <tr className={this.props.completed ? "completed" : "notCompleted"}>
        <td>{this.props.title}</td>
        <User name={this.props.name} />
        <td>{`${this.props.completed}`}</td>
      </tr>
    );
  }
}
