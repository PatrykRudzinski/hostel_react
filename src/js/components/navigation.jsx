import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: this.props.fetchedData
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            num: newProps.fetchedData
        })
    }
    render(){
        return <nav className={'page-navigation'}>
            <ul>
                <li><Link exact to='/' activeClassName={'navigation-active'}>Home</Link></li>
                <li><Link to='/weather' activeClassName={'navigation-active'}>Pogoda</Link></li>
                <li><Link to='/rooms' activeClassName={'navigation-active'}>Pokoje</Link></li>
            {/*<Link to='/contact'>Kontakt</Link>*/}
            </ul>
        </nav>
    }
}

export {Navigation}