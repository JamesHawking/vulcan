import React, {Component} from 'react';
import './Sidenav.css'
class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <figure className="avatar avatar-xl avatar-center">
          <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..."/>
        </figure>
        <ul className="sidenav nav">
          <li className="nav-item">
            <a href="#">Elements</a>
          </li>
          <li className="nav-item active">
            <a href="#">Layout</a>
            <ul className="nav">
              <li className="nav-item">
                <a href="#">Flexbox grid</a>
              </li>
              <li className="nav-item">
                <a href="#">Responsive</a>
              </li>
              <li className="nav-item">
                <a href="#">Navbar</a>
              </li>
              <li className="nav-item">
                <a href="#">Empty states</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Components</a>
          </li>
          <li className="nav-item">
            <a href="#">Utilities</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
