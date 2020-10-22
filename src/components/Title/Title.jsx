import React from 'react';
import { TitleShapes } from '../../shapes/TitleShapes';

export function Title({ title }) {
  return <td>{title}</td>;
}

Title.propTypes = TitleShapes;
