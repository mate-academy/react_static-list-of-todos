import PropTypes from 'prop-types';
import { companyShape } from './CompanyShape';
import { addressShape } from './AddressShape';

export const userShape = PropTypes.shape({
  address: addressShape,
  company: companyShape,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});
