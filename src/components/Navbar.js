import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
  searchHandler = (event) => {
    this.props.onInputChange(event.target.value);
    // this.setState({search: event.target.value});
    // console.log(this.state.search, event.target.value);
  }

  render() {
    return (
      <header className="navbar">
      <section className="navbar-section">
        <a href="#" className="navbar-brand mr-2">Dashboard</a>
        <a href="#" className="btn btn-link">Docs</a>
        <a href="https://github.com/picturepan2/spectre" className="btn btn-link">GitHub</a>
        <span className="search-container">
        <i className="position align icon icon-2x icon-search"></i>
        <input className="elevation1 search" placeholder="Search" onChange={this.searchHandler}/>
        </span>
      </section>
      <section className="navbar-section">
        Right
      </section>
      </header>
    );
  }
}

export default Navbar;
