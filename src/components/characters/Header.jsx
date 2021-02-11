import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <nav>
        <p className="intro">
                    Hello, and Welcome!
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

