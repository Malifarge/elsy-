import React from "react";
import './App.css';
import './styles/global.css'
import './components/Box.js'
import Box from "./components/Box.js";

const tempMin = -20
const tempMax = 40
const heartMin =80
const heartMax =180
const stepsMin =0
const stepsMax =50000


class App extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="container-fluid">

        <div className="row">
             {/* water */}
             <Box icon="local_drink" color="blue" value={1.5} unit="L" background="pairs"/>
             {/* Steps */}
             <Box icon="directions_walk" color="black" value={3000} unit="steps" background="impairs"/>
             {/* Heart */}
             <Box icon="favorite" color="red" value={120} unit="bpm" background="pairs"/>
             {/* Temperature */}
             <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" background="impairs"/>
      </div>

      </div>
    );
  }
}

export default App;