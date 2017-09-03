import React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = ({ location }) => (
  <section className="hero is-large">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-1">404</h1>
        <h3 className="subtitle is-2">Uh oh, there is nothing here..</h3>
        <Link to="/">
          <button className="button is-info is-outlined">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  </section>
);
