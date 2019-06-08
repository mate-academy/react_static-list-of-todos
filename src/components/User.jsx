import React from 'react'

export default function User(props) {
  return (
   <td><a href={props.email}>{props.name}</a></td>
  )
}
