import React from 'react';
import User from "./User.js"

function UserList(props) {
    return (
        <td>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {props.todoList.map((value, index) => {
                    return (
                        <User user={props.userList.filter((item) => item.id === value.userId)[0]} />
                    );
                })}
            </table>
        </td>

    );
}


export default UserList;
