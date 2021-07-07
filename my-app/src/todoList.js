import React from 'react';
import ReactDOM from 'react-dom';
import {TODOS} from './todos';
import {USERS} from './users';

function User (props) {
        const {
            userId,
            name,
            username,
            email,
            address,
            phone,
            website,
            company
        } = props;
        return (
            <div className = "user" style = {{border: '2px solid black', width: '500px', borderRadius: '15px'}}>
              <h3>User ID: {userId}</h3> 
              <p>User name: {name}</p> 
              <p>Username: {username}</p>  
              <p>email:<a href={email} style = {{textDecoration: 'none'}} > {email} </a></p>
              <div>Address: 
                <ul>
                  <li>street: <b>{address.street}</b></li>
                  <li>suite: <b>{address.suite}</b></li>
                  <li>city: <b>{address.city}</b></li>
                  <li>zipcode: <b>{address.zipcode}</b></li>
                 <div> <b>geo</b>:
                     <ul>
                         <li>latitude: <b>{address.geo.lat}</b></li>
                         <li>longitude: <b>{address.geo.lng}</b></li>
                     </ul>
                 </div>
                </ul>
              </div>

              <p>Phone: {phone}</p>
              <p>website: <a href={website}  style = {{textDecoration: 'none', fontSize: 25}} target="_blank"> {website} </a></p>
              <div>Company: 
                <ul>
                  <li><p>Company name:    <b>{company.name}</b></p></li>
                  <li><p>Company catchPhrase:    <b>{company.catchPhrase}</b></p></li>
                  <li><p>company bs:    <b>{company.bs}</b></p></li>
                </ul>
              </div>
            </div>
     )
   }
function TodoItem (props) {
    const {
        userId,
        todosId,
        todosTitle,
        todosStatus
    } = props;
    return (
        <div className = "Todos" style = {{border: '2px solid black', width: '500px', borderRadius: '15px'}}>
            <h3>User ID: {userId}</h3>
            <h5>Todos id: {todosId}</h5>
            <p>Todoas title: <b>{todosTitle}</b></p>
          {!todosStatus ? <p>Todos status: <b style = {{color: 'red', fontSize: 25}}>not completed</b></p>
          : <p>Todos status: <b style = {{color: 'green', fontSize: 25}}>completed</b></p>}
        </div>
      );
  
};
function TodoList () {
    return (
      <div>
        <div>
          {
TODOS.map (list =>
  <TodoItem
    userId = {list.userId} 
    todosId = {list.id}
    todosTitle = {list.title}
    todosStatus = {list.completed}
    key = {list.id}
    />
  )
}
  </div>
  <div>
    {
    USERS.map (user =>
      <User
        key = {user.id}
        userId = {user.id}
        name = {user.name}
        username = {user.username}
        email = {user.email}
    address = {user.address}
        phone = {user.phone}
        website = {user.website}
        company = {user.company}
    />
        )
      }
  </div>
</div>

    );
 };

ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
  );

  export default TodoList;