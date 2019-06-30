import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <td>
        {this.props.user.name}
      </td>
    );
  }
}

export default User;
