import PropTypes from 'prop-types';

export const userNameProp = {
  name: PropTypes.string.isRequired,
};

export const taskTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
