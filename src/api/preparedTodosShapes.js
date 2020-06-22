import PropTypes from 'prop-types';

const companyShapes = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

const userShapes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  adress: PropTypes.shape(),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: companyShapes,
});

const todoShapes = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

export { todoShapes, userShapes, companyShapes };
