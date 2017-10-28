import React, {Component} from 'react';
import Modal from './components/Modal';
import './Box.css';

class Box extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    // this.activateLasers = this.activateLasers.bind(this);
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  activateLasers = (e, data) => {
    console.log(data)
    this.setState({modalIsOpen: true});
  }

  render() {
    const data = [
      {
        data: "Pulp Fiction"
      }, {
        data: "Fight Club"
      }, {
        data: "The Shawshank Redemption"
      }, {
        data: "The Dark Knight"
      }, {
        data: "Inglourious Basterds"
      }, {
        data: "Inception"
      }, {
        data: "The Matrix"
      }, {
        data: "The Empire Strikes Back"
      }, {
        data: "The Lord of the Rings: The Fellowship of the Ring"
      }, {
        data: "Toy Story"
      }, {
        data: "The Big Lebowski"
      }, {
        data: "Django Unchained"
      }, {
        data: "The Lord of the Rings: The Return of the King"
      }, {
        data: "The Departed"
      }, {
        data: "Memento"
      }, {
        data: "The Godfather"
      }, {
        data: "Reservoir Dogs"
      }, {
        data: "Saving Private Ryan"
      }, {
        data: "Forrest Gump"
      }, {
        data: "Monty Python and the Holy Grail"
      }, {
        data: "Se7en"
      }, {
        data: "Back to the Future"
      }, {
        data: "Goodfellas"
      }, {
        data: "The Prestige"
      }, {
        data: "Shaun of the Dead"
      }, {
        data: "Alien"
      }, {
        data: "The Silence of the Lambs"
      }, {
        data: "The Lord of the Rings: The Two Towers"
      }, {
        data: "Spirited Away"
      }, {
        data: "The Good, the Bad and the Ugly"
      }, {
        data: "Eternal Sunshine of the Spotless Mind"
      }
    ]
    return (
      <div className="box elevation1">
        {this.state.modalIsOpen
          ? <Modal data={data[1]} showModal={this.state.modalIsOpen} closeModal={this.closeModal}/>
          : ''}
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Wiki</th>
              <th>Release date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => {
              return (
                <tr key={index} className="">
                  <td>{data.data}</td>
                  <td>Crime, Drama</td>
                  <td>14 October 1994</td>
                  <td onClick={(e) => this.activateLasers(e, data)}>
                    <i className="icon icon-edit"></i>
                  </td>
                  <td>
                    <i className="icon icon-delete"></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Box;
