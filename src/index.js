const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App')
ReactDOM.hydrate(React.createElement(App), document.getElementById('root'))
