import React from 'react';
import { Router, Navigation, Route, Link } from 'react-router';

let Index = React.createClass({ 
  mixins: [ Navigation ],
  render() {
    return (
      <h1>Index</h1>
    );
  }
});

export default Index;  