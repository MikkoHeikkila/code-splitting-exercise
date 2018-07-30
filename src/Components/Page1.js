import React from 'react';
import Header from './Header';

console.log("Page 1");

const pageName = "Page 1";

const Page1 = ({ onRouteChange }) =>

  <div className="App">
    <Header pageName={pageName} />
    <button className='disabled'>Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>

export default Page1;