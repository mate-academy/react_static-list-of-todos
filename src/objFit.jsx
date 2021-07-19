import propTypes from 'prop-types';

export const template = propTypes.shape({
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  address: propTypes.shape({
    street: propTypes.string.isRequired,
    suite: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    zipcode: propTypes.string.isRequired,
    geo: propTypes.shape({
      lat: propTypes.string.isRequired,
      lng: propTypes.string.isRequired,
    }),
  }),
  phone: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  company: propTypes.shape({
    name: propTypes.string.isRequired,
    catchPhrase: propTypes.string.isRequired,
    bs: propTypes.string.isRequired,
  }),
});
