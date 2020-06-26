import PropTypes from 'prop-types';
import { GeoShape } from './GeoShape';

export const AddressShape = PropTypes.shape({
  city: PropTypes.string.isRequired,
  geo: GeoShape,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
});
