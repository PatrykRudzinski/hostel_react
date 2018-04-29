import React from 'react';

class Holidays extends React.Component{
    render(){
        console.log(this.props.match.params.country);
        return <p>API z holidays days</p>
    }
}

export {Holidays}