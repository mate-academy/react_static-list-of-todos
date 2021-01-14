import PropTypes from 'prop-types';

export const listType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string,
  }).isRequired,
};

export const UserType = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string,
  }),
};
