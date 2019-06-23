import React from 'react';
import '../App.css'

const User = (props) => (
  <ul>
    {props.user.map(el => <li>{el}</li>)}
  </ul>
)

export default User;