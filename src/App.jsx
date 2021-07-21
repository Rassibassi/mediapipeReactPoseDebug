import React, { Component } from 'react';
import LandmarkGrid from '@mediapipe/control_utils_3d';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br/>
              <h1 className="title is-1">DanceApp</h1>
              <hr/><br/>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default App;
