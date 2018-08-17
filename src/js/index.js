/**
 * @file Index. Instatiates and renders the React application to the DOM.
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
 * ReactDOM
 * @type {Object}
 * @external 'react-dom'
 * @see {@link https://reactjs.org/docs/react-dom.html}
 */
import ReactDOM from 'react-dom';

/**
 * App
 * @type {Object}
 */
import App from 'app';

/**
 * Render the application
 * @external 'ReactDOM.render'
 * @see {@link https://reactjs.org/docs/react-dom.html#render}
 */
ReactDOM.render(<App />, document.getElementById('app'));
