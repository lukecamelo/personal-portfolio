import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import './header.css';

class Header extends Component {
  render() {
    return(
      <div className='Header'>
      <Fade>
        <div className='headText'>
          <Fade cascade>
          <h1>My name is Luke Camelo.</h1>          
          <p>I'm a front-end web developer/overall handsome dude.</p>
          </Fade>
        </div>
        <div className="headBlurb">
          <Fade cascade>
          <p>
            This is my website!
          </p>
          </Fade>
        </div>
        </Fade>
      </div>
    );
  }
}

export default Header;