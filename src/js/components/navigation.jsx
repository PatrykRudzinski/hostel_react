import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return <div>
            <Link to='/'>home</Link>
        </div>
    }
}

export {Navigation}