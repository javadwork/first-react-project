import React from 'react';

class Car extends React.Component{
    render(){
        return(
            <React.Fragment>
                <p> model car is: {this.props.model}</p>
            </React.Fragment>
        )
    }
}

export default Car