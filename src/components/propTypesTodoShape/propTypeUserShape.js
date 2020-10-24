import PropTypes from 'prop-types';

const propTypeUserShape = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default propTypeUserShape;
