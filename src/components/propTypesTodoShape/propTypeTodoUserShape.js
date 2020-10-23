import PropTypes from 'prop-types';

const propTypeTodoUserShape = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default propTypeTodoUserShape;
