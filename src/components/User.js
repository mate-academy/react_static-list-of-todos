import React, {Component} from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {name, email} = this.props;
        return <div>
            <p>User: {name}</p>
            <p>Email: {email}</p>
        </div>;
    }
}