import React, {Component} from 'react';
import modalFactory from './components/Modal';
import './Box.css';

var OriginalComponent = () => <p>Hello world.</p>;
var EditModal = modalFactory(OriginalComponent);

class Box extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      currentData: {}
    };
  }

  filterBox = () => {
    const stateData = this.state.data;
    stateData.filter((item) => {
      return item.data.indexOf(this.props.searchInput) > -1;
    })
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  activateLasers = (e, data) => {
    this.setState({modalIsOpen: true});
    this.setState({currentData: data});
  }

  destroyEnemy = (e, data, index) => {
    const arrayCopy = this.props.data;
    arrayCopy.splice(index, 1);
    this.setState({data: arrayCopy});
  }

  render() {
    const filteredData = this
      .props
      .data
      .filter((item) => {
        if (item.data.toLowerCase().indexOf(this.props.searchInput.toLowerCase()) > -1) {
          return item;
        };
      });

    return (
      <div className="box elevation1">
        {this.state.modalIsOpen
          ? <EditModal
              data={this.state.currentData}
              showModal={this.state.modalIsOpen}
              closeModal={this.closeModal}/>
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
            {filteredData.map((data, index) => {
              return (
                <tr key={index} className="">
                  <td>{data.data}</td>
                  <td>Crime, Drama</td>
                  <td>14 October 1994</td>
                  <td onClick={(e) => this.activateLasers(e, data)}>
                    <i className="icon icon-edit"></i>
                  </td>
                  <td>
                    <i
                      className="icon icon-delete"
                      onClick={(e) => this.destroyEnemy(e, data, index)}></i>
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
