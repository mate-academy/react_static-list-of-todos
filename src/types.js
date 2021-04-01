import PropTypes from 'prop-types';

export const AddressType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }),
});

export const CompanyType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string.isRequired,
});

CompanyType.defaultProps = {
  catchPhrase: '',
  bs: '',
};

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressType.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string,
  company: CompanyType,
});

UserType.defaultProps = {
  website: '',
};

export const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  user: UserType.isRequired,
  completed: PropTypes.bool,
});

TodoType.defaultProps = {
  completed: false,
};
