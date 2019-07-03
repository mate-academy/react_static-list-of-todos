import React from "react";

import ToDoItem from "../toDo/ToDoItem";
import User from "../user/User";
import "../toDo/TableStyle.css";

const ToDoList = ({ toDoItems, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              onSort("completed");
            }}
            className="table-border pointer"
          >
            Is completed
          </th>
          <th
            onClick={() => {
              onSort("title");
            }}
            className="table-border pointer"
          >
            ToDo item
          </th>
          <th
            onClick={() => {
              onSort("user");
            }}
            className="table-border pointer"
          >
            User
          </th>
        </tr>
      </thead>
      <tbody>
        {toDoItems.map(item => {
          return (
            <tr>
              <ToDoItem key={item.id} item={item} />
              <User user={item.user} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;
