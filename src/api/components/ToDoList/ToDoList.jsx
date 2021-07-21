import React from 'react';
import ProptTypes from 'prop-types';
import { ListItem } from '../ListItem';

export const ToDoList = ({ tasks }) => (
  tasks.map(task => (
    <tr className="list__item" key={task.id}>
      <ListItem toDo={task} />
    </tr>
  )));

ToDoList.ProptTypes = {
  tasks: ProptTypes.arrayOf({
    task: ProptTypes.shape({
      id: ProptTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
