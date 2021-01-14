import PropTypes from 'prop-types';

const userTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  address: PropTypes.arrayOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,

    geo: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    })),

  })),

  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,

  company: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  })),
});

export const TodoListTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.arrayOf(userTypes).isRequired,
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export const TodoTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(userTypes).isRequired,
};

export const UserTypes = {
  name: PropTypes.string.isRequired,
};
