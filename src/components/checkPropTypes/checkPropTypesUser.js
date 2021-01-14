import PropTypes from 'prop-types';

export const checkPropTypesUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
