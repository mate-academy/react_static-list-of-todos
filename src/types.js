import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

export const TodoType = PropTypes.shape({
  completed: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: UserType.isRequired,
  userId: PropTypes.number.isRequired,
});

export const TodosType = PropTypes.arrayOf(TodoType);
