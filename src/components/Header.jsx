const logo = require('../logo.svg'),
    React = require('react');

function Header() {
  return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              Learn React
          </a>
      </header>
  );
}

module.exports = Header;
