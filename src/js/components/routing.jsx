import React from 'react';
import {
    HashRouter,
    Route,
    Switch
  } from 'react-router-dom';
import {Navigation} from './navigation.jsx';
import {HomePage} from './_homePage.jsx';
import {NotFound} from './_notFound.jsx';
import {Weather} from './_weather.jsx';
import {Rooms} from './_rooms.jsx';
import {RoomDetails} from './_roomDetails.jsx';


class Routing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetchedData: []
        }
    };
    updateState=(data)=>{
        const ar = [...this.state.fetchedData];
        ar.push(data);
        this.setState({
            fetchedData: ar
        })
    };
    render() {
        return <HashRouter>
            <div>
                <Navigation dataRouting={this.state.fetchedData}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/weather' component={Weather}/>
                    <Route exact path='/rooms' component={Rooms}/>
                    <Route path='/rooms/:number' component={()=> <RoomDetails
                        func={this.updateState}
                        fetchedData={this.state.fetchedData}
                    />}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export {Routing}
