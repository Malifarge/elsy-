import React from "react";

class Box extends React.Component{
    render(){
        const itsWater = this.props.icon !== "local_drink"
        return(
            
            <div className={`box col-sm-3 col-6`}>
                <span className="material-icons" 
                style={{
                    color : this.props.color,
                    fontSize : 100
                }} >
                {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {itsWater && <input type='range' min={this.props.min} max={this.props.max} onChange={this.props.change} />}

            </div>
        )
    }
}

export default Box