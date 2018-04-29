import React from 'react';

const url = 'https://hostel-react.firebaseio.com/0.json'

class Rooms extends React.Component{

    updateDB=()=>{
        this.props.func({obj: Math.random()})
    };

    render(){
        //console.log(this.props.match.params.country);
        return <button onClick={this.updateDB}>btn</button>
    }
}

export {Rooms}
