import React from 'react';
import './contact.css';

const contact = () => {
  return(
    <div className='contactContainer'>
      <div className="email">
        <h2>You can reach me at:</h2>
        <h1 className="eLink">llukecamelo@gmail.com</h1>
      </div>

      <div className="socialLinks">
        <a href="" className="twitter">Twitter</a>
        <a href="" className="github">GitHub</a>
        <a href="" className="facebook">Facebook</a>
        <a href="" className="linkedin">LinkedIn</a>
      </div>

    </div>
  );
}

export default contact;