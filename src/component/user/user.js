import './user.css';
import React from 'react';

function User(props) {
  return (
    < >
    <div className="card__contact">
      <i className="icon far fa-address-book"></i> Full name: {props.person.name}
    </div>
    <div className="card__email">
      <i className="icon email far fa-envelope"></i> Email: {props.person.email}
    </div>
    <div className="card__phone">
      <i class="icon fas fa-phone-alt"></i> Phone: {props.person.phone}
    </div>
    </>
  )
}

export default User;
