import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <div className='headText'>
          <h1>My name is Luke Camelo.</h1>
          <p>I'm a front-end web developer/overall handsome dude.</p>
        </div>
        <div className="headBlurb">
          <p>
            This is my website!
          </p>
        </div>
      </div>
    );
  }
}

export default Header;