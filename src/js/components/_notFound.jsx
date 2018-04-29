import React from 'react';
import {Redirect} from 'react-router-dom';

class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            back: false
        }
    }

    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({
                back: !this.state.back,
            })
        }, 5000)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        if(this.state.back){
            return <Redirect to='/' />
        } else {
            return <h1 className={'not_found'}>Not&nbsp;found</h1>
        }
    }
}

export {NotFound}