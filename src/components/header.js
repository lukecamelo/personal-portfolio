import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <div className='headText'>
          <h1>Luke Camelo</h1>
          <p>Hey, I like to make websites.</p>
        </div>
      </div>
    );
  }
}

export default Header;