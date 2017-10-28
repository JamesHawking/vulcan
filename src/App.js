import React, {Component} from 'react';

import Box from './Box';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar/>
          <div className="columns">
            <div className="column col-2">
              <Sidenav/>
            </div>
            <div className="column col-10">

              <Box/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


<div className="flex">
<Card/>
<Card/>
</div>