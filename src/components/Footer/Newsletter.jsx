import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='newsletter' />
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button className='custom__button'>Subscribe</button>

    </div>
    Newsletter
  </div>
);

export default Newsletter;
