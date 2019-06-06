import React from 'react';
import './UserDetails.css';

export default function UserDetails(props) {
  return (
    <div className="info-details">
      <ul>
        <li>
          User website: <a href={props.website}>
            {props.website}
          </a>
        </li>
        <li>Phone: {props.phone}</li>
        <li>Company: "{props.companyName}"</li>
      </ul>
    </div>
  );
}
