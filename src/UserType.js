import PropTypes from 'prop-types';

export const UserType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
  }),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }),
};
