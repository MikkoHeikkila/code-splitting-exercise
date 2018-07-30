import React from 'react';
import Header from './Header';

console.log("Page 2");

const pageName = "Page 2";

const Page2 = ({ onRouteChange }) =>

  <div className="App">
    <Header pageName={pageName} />
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button className='disabled'>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>

export default Page2;