import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <React.Fragment>{this.props.user}</React.Fragment>
        );
    }
}

export default User;