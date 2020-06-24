import PropTypes from 'prop-types';

export const companyShape = PropTypes.shape({
  bs: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
