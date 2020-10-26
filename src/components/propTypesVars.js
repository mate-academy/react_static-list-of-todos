import PropTypes from 'prop-types';

export const userPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}.isRequired);

export const taskPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}.isRequired);
