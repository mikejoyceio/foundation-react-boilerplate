/**
 * @file App
 * @version 1.0
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * React
 * @type {Object}
 * @external 'react'
 * @see {@link https://reactjs.org/docs/getting-started.html}
 */
import React, { Component } from 'react';

/**
 * BrowserRouter
 * @type {Object}
 * @external 'react-router-dom'
 * @see {@link https://reacttraining.com/react-router/core/guides/philosophy}
 */
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

/**
 * browserHistory
 * @type {Object}
 * @external 'react-router-dom'
 * @see {@link https://reacttraining.com/react-router/core/guides/philosophy}
 */
import { browserHistory } from 'react-router';

/**
 * Import SCSS
 * @see {src/scss/app.scss}
 */
import '../../scss/app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 column">

        </div>
      </div>
    )
  }
}
