import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <div className='headText'>
          <h1>Person's Name</h1>
          <p>This text is not cooperating.</p>
        </div>
      </div>
    );
  }
}

export default Header;