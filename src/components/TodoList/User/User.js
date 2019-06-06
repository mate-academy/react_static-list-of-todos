import React from 'react';
import UserDetails from './UserDetails/UserDetails';
import './User.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailed: false,
      showingLogin: false,
    };
    this.email = 'mailto:' + props.userInfo.email;
    this.name = props.userInfo.name;
    this.username = props.userInfo.username;
    this.website = 'https://' + props.userInfo.website;
    this.phone = props.userInfo.phone;
    this.companyName = props.userInfo.company.name;

    this._detalizeClicked = this._detalizeClicked.bind(this);
    this._showLogin = this._showLogin.bind(this);
    this._hideLogin = this._hideLogin.bind(this);
  }

  _detalizeClicked() {
    this.setState({
      detailed: !this.state.detailed,
    })
  }

  _showLogin() {
    this.setState({
      showingLogin: true,
    });
  }

  _hideLogin() {
    this.setState({
      showingLogin: false,
    });
  }

  render() {
    const details = this.state.detailed
      ? (
        <div className="login">
          <UserDetails
            website = {this.website}
            phone = {this.phone}
            companyName = {this.companyName}
          />
        </div>
      ) : '';
    const login = this.state.showingLogin
      ? (<div className='login'>Write to user {this.username}</div>)
      : '';

    return (
      <div className='info-user'>
        <div className='info-header'>
          {/*<CSSTransitionGroup*/}
          {/*  transitionName={ {*/}
          {/*    enter: 'detalizer',*/}
          {/*    enterActive: '.animation-active',*/}
          {/*    leave: '.animation-active',*/}
          {/*    leaveActive: 'detalizer',*/}
          {/*  } }*/}
          {/*  transitionEnterTimeout={300}*/}
          {/*  transitionLeaveTimeout={300}*/}
          {/*>*/}
            <span className='detalizer' onClick={this._detalizeClicked}>
              {this.state.detailed ? '--' : '+'}
            </span>
          {/*</CSSTransitionGroup>*/}
          <a
            href={this.email}
            onMouseOver={this._showLogin}
            onMouseLeave={this._hideLogin}
          >{this.name}</a>
          <CSSTransitionGroup
            transitionName='detailed'
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
          >
            {login}
            {details}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}
