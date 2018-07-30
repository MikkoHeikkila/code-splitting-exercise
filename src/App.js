import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable';

import Page1 from './Components/Page1';
import AppHeader from './Components/AppHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  render() {
    //Async page components with React Loadable
    const Page2 = Loadable({
      loader: () => import('./Components/Page2'),
      loading() {
        return <div>Loading...</div>
      }
    });
    const Page3 = Loadable({
      loader: () => import('./Components/Page3'),
      loading() {
        return <div>Loading...</div>
      }
    });

    // Part 1 - No code splitting
    if (this.state.route === 'page1') {//Page1
      return(
        <div>
          <AppHeader />
          <Page1 onRouteChange={this.onRouteChange} />           
        </div>
      ); 
    } else if (this.state.route === 'page2') {
      return(
        <div>
          <AppHeader />
          <Page2 onRouteChange={this.onRouteChange} />           
        </div>
      ); 
    } else {
      return(
        <div>
          <AppHeader />
          <Page3 onRouteChange={this.onRouteChange} />           
        </div>
      );
    }
  }
}

export default App;
