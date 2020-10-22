import React from 'react';
import { StatusShapes } from '../../shapes/Status';

export function Status({ completed }) {
  if (completed === false) {
    return (
      <td className="completed">
        Completed
      </td>
    );
  }

  return (
    <td className="not-completed">
      Not completed
    </td>
  );
}

Status.propTypes = StatusShapes;
