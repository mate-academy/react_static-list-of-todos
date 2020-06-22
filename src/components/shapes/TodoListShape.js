import PropTypes from 'prop-types';
import { fullUserShape } from './fullUserShape';

export const todoShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: fullUserShape.isRequired,
});
