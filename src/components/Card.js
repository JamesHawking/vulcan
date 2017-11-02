import React, {Component} from 'react';
import TrendLine from './TrendLine';
import './Card.css';

class App extends Component {
  render() {
    return (
      <div className="card-alg pos-rel">
        <TrendLine/>
      </div>
    );
  }
}

export default App;
