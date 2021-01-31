import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
});

export const TodoTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType.isRequired,
});
