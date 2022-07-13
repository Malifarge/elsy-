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
  
  constructor(){
    super()
    this.state={
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }

  onHeartChange = e =>{
    this.setState({
      heart: e.target.value
    })
  }

  onStepChange = e => {
    this.setState({
      steps : e.target.value
    })
  }

  onTempChange = e => {
    this.setState({
      temperature : e.target.value
    })
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">
             {/* water */}
             <Box 
             icon="local_drink" 
             color="#3A85FF" 
             value={1.5} 
             unit="L" 
             />
             {/* Steps */}
             <Box 
             icon="directions_walk" 
             color="black" 
             value={this.state.steps} 
             unit="steps"
             min={stepsMin}
             max={stepsMax}
             change={this.onStepChange}
             />
             {/* Heart */}
             <Box 
             icon="favorite" 
             color="red" 
             value={this.state.heart} 
             unit="bpm" 
             min={heartMin}
             max={heartMax}
             change={this.onHeartChange}

             />
             {/* Temperature */}
             <Box 
             icon="wb_sunny" 
             color="yellow" 
             value={this.state.temperature} 
             unit="°C"
             min={tempMin}
             max={tempMax}
             change={this.onTempChange}
             />
      </div>

      </div>
    );
  }
}

export default App;