import React, {Component} from 'react';
import {users} from '../users';

class User extends Component {
  constructor(props) {
    super(props);
    this.user = users.find(user => user.id === this.props.userId);
  }

  render() {
    return (
      <td><a href="mailto:{this.user.email}">{this.user.name}</a></td>
    );
  }
}

export default User;
