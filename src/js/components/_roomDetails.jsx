import React from 'react';

class RoomDetails extends React.Component{
    render(){
        console.log(this.props.match.params.country);
        return <p>API z holidays days</p>
    }
}

export {RoomDetails}