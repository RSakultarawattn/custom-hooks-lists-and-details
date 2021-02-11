import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-router-dom';
import FunctionContextComponent from '../context/FunctionContextComponent';
import { ThemeProvider } from '../context/ThemeContext';




export default class Header extends Component {
  render() {
    return (
      <nav>
        <ThemeProvider>
          <FunctionContextComponent />
        </ThemeProvider>
      
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

