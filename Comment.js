import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div className="comment" key={this.props.name}>
        <h4>{this.props.name}</h4>
        <p>{this.props.body}</p>
        <a href={"mailto: " + this.props.email}>{this.props.email}</a>
      </div>
    );
  }
}

export default Comment;
