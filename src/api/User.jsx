import React from 'react';
import PropTypes from 'prop-types';

let idOfUser = 1;
let red = 40;
let green = 0;
let blue = 255;

function User({ people }) {
  const makeColor = () => {
    const rgb = `rgb(${red}, ${green}, ${blue})`;

    if (idOfUser !== people.id) {
      red = red >= 255 ? 0 : red;
      green = green >= 255 ? 40 : green;
      blue = blue <= 0 ? 255 : blue;

      red += 330;
      green += 55;
      blue -= 30;

      idOfUser += 1;
    }

    return `${rgb}`;
  };

  return (
    <>
      <span style={{ color: `${makeColor()}` }}>
        {` ${people.name}`}
      </span>
    </>
  );
}

User.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,

    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,

      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }).isRequired,

      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }),

    }).isRequired,

  }).isRequired,
};

export default User;
