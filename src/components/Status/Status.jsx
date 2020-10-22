import React from 'react';
import { StatusShapes } from '../../shapes/Status';

export function Status({ completed }) {
  if (completed === false) {
    return (
      <td>
        Completed
      </td>
    );
  }

  return (
    <td>
      Not completed
    </td>
  );
}

Status.propTypes = StatusShapes;
