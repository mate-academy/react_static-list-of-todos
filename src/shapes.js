import PropTypes from 'prop-types';

const geoShape = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

const addressShape = PropTypes.shape({
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  geo: geoShape,
});

const companyShape = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

const userShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: addressShape,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: companyShape,
});

const todoShape = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

export { userShape, todoShape };
