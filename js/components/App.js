import React from 'react';
import { Router, Navigation, Route, Link } from 'react-router';

let App = React.createClass({ 
  mixins: [ Navigation ],
  render() {
    return (
      <div className="App">
        <div className="Navigation">
	        <ul>
  	        <li><Link to="/">Home</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
        </div>
        <div className="Content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default App;  