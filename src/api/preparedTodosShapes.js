import PropTypes from 'prop-types';

const companyShapes = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

const userGeo = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

const userAdressShape = PropTypes.shape({
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  geo: PropTypes.shape({
    userGeo,
  }),
});

const userShapes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  adress: userAdressShape,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: companyShapes,
});

const todoShapes = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

const preparedTodosShape = PropTypes.shape({
  todoShapes,
  user: userShapes,
});

export { todoShapes, userShapes, preparedTodosShape };
