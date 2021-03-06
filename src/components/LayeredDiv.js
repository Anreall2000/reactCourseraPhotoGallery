import React from 'react';

const ContentAreaContext = React.createContext();

export default ContentAreaContext;
import React from 'react';
import AppContext from './AppContext';
import ContentAreaContext from './ContentAreaContext';

class LayeredDiv extends React.Component {

  render() {
    return (
      <Layer1 />
    )
  }
}

class Layer1 extends React.Component {

  render() {

    return (
      <div style={{ backgroundColor: "red", color: "black", marginLeft: "10rem", marginRight: "10rem"  }}>
        <p>Layer1</p>
        <Layer2 />
        <p>Layer1</p>
      </div>
    )
  }
}

class Layer2 extends React.Component {

  render() {

    return (
      <div style={{ backgroundColor: "white", color: "black", marginLeft: "2rem", marginRight: "2rem" }}>
        <p>Layer2</p>
        <Layer3 />
        <p>Layer2</p>
      </div>
    )
  }
}

class Layer3 extends React.Component {

  // Task 5: assign the context to the static variable contextType here

  render() {

    console.log("Layer3.render( )");

    return (
      <div style={{ backgroundColor: "blue", color: "white", marginLeft: "2rem", marginRight: "2rem", padding: "0.5rem"  }}>
        <p>Layer3</p>
        <p>Dr. [ Task 5 userName from the context here ]!<br />Earn a doctorate degree in as little as 6 months!</p>
      </div>
    )
  }
}

export default LayeredDiv;