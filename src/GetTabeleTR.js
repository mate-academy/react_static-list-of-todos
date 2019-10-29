import React from 'react';
import './App.css';

function GetTabeleTR (elem) {
  return elem.props.map(user =>{
    return(
    <tr className={user.completed ? "redBG" : "greenBG"} key={user.id}>
      <td>{user.title}</td>
      <td>{user.completed + ''}</td>
      <td>{user.user.name}</td>
    </tr>)
    })
}

export default GetTabeleTR;
