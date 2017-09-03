import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="Home-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/404">
          <button className="button is-info is-outlined">
            404
          </button>
        </Link>
      </section>
    );
  }
}

export default Home;