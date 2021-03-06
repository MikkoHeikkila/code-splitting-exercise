import React from 'react';
import Header from './Header';

console.log("Page 3");

const pageName = "Page 3";

const Page3 = ({ onRouteChange }) =>
  
  <div className="App">
    <Header pageName={pageName} />
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button className='disabled'>Page3</button>
  </div>

export default Page3;