import PropTypes from 'prop-types';
import { CompanyShape } from './CompanyShape';
import { AddressShape } from './AddressShape';

export const UserShape = PropTypes.shape({
  address: AddressShape,
  company: CompanyShape,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});
