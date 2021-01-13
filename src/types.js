import PropTypes from 'prop-types';

const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

const TitleTypes = PropTypes.string;

const CompletedTypes = PropTypes.bool;

export { UserTypes, TitleTypes, CompletedTypes };
