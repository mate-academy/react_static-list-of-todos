import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    bs: PropTypes.string,
    catchPhrase: PropTypes.string,
    name: PropTypes.string,
  }),
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
});
