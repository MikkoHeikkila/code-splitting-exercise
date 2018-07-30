import React from 'react';
import logo from '../logo.svg';
import Header from './Header';

const pageName = "Page 1";

const Page1 = ({ onRouteChange }) =>
  <div className="App">
    <Header pageName={pageName} />
    <button className='disabled'>Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>

export default Page1;