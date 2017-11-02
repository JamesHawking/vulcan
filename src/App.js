import React, {Component} from 'react';
import Trend from 'react-trend';

import Box from './Box';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Card from './components/Card';
import modalFactory from './components/Modal';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      data: [
        {data: "Pulp Fiction"}, {data: "Fight Club"}, {data: "The Shawshank Redemption"}, {data: "The Dark Knight"}, {data: "Inglourious Basterds"}, {data: "Inception"}, {data: "The Matrix"}, {data: "The Empire Strikes Back"}, {data: "The Lord of the Rings: The Fellowship of the Ring"}, {data: "Toy Story"}, {data: "The Big Lebowski"}, {data: "Django Unchained"}, {data: "The Lord of the Rings: The Return of the King"}, {data: "The Departed"}, {data: "Memento"}, {data: "The Godfather"}, {data: "Reservoir Dogs"}, {data: "Saving Private Ryan"}, {data: "Forrest Gump"}, {data: "Monty Python and the Holy Grail"}, {data: "Se7en"}, {data: "Back to the Future"}, {data: "Goodfellas"}, {data: "The Prestige"}, {data: "Shaun of the Dead"}, {data: "Alien"}, {data: "The Silence of the Lambs"}, {data: "The Lord of the Rings: The Two Towers"}, {data: "Spirited Away"}, {data: "The Good, the Bad and the Ugly"}, {data: "Eternal Sunshine of the Spotless Mind"
        }
      ],
    }
  }

  onSearchChange = (data) => {
   this.setState((state) => ({ search: data}));
  //  console.log(data, this.state.search)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar onInputChange={this.onSearchChange}/>
          <div className="columns">
            <div className="column col-2">
              <Sidenav/>
            </div>
            <div className="column col-10">
              <div className="container">
                <div className="columns">
                  <div className="column col-6">
                    <Card/>
                  </div>
                  <div className="column col-6">
                    <Card/>
                  </div>
                </div>
              </div>
              <Box searchInput={this.state.search} data={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
