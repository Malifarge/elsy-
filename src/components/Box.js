import React from "react";

class Box extends React.Component{
    render(){
        return(
            
            <div className={`box col-sm-3 col-6 ${this.props.background}`}>
                <span className={`material-icons  ${this.props.color}`}>
                {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        )
    }
}

export default Box