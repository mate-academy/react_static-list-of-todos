import React from 'react';
import User from '../User/User';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed,
    };
    this.title = props.title;
    this.userInfo = props.userInfo;
    this._stateChanged = this._stateChanged.bind(this);
  }

  _stateChanged() {
    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {
    return (
      <section
        className={this.state.completed ? 'list-item green' : 'list-item red'
      }>
        <div className='item-subsection main-content'>
          <label
            htmlFor='state-checkbox'
            className={this.state.completed
              ? 'todo-state item-subsection green'
              : 'todo-state item-subsection red'
            }>
            <input
              type='checkbox'
              name='state-checkbox'
              id='state-checkbox'
              checked={this.state.completed}
              onChange={this._stateChanged}
            />
            {
              this.state.completed
                ? 'Done'
                : 'In process'
            }
          </label>
          <div className='todo-title  item-subsection'>{this.title}</div>
        </div>
        <User userInfo={this.userInfo}/>
      </section>
    );
  }
}

export default TodoItem;
