import React from 'react';
import ProptTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';

export const ToDoList = ({ tasks }) => (
  tasks.map(task => (
    <tr className="list__item" key={task.id}>
      <ListItem toDo={task} />
    </tr>
  )));

ToDoList.ProptTypes = {
  id: ProptTypes.number.isRequired,
};
