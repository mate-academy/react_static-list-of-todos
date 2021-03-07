import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export const todoType = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: userType.isRequired,
};
