import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class RoomDetails extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            singleBeds: null,
            doubleBeds: null,
            bunkBeds: null,
            places: null,
            info: null,
            dates: null,
            id: null
        }
    }

    componentDidMount(){
        const roomNumber = window.location.href.split('/').reverse()[0];
        const url = `https://hostel-react.firebaseio.com/${roomNumber}.json`;
        const fetched = this.props.fetchedData.findIndex(el=>{
            return el.id == roomNumber
        });
        if(fetched === -1) {
            fetch(url).then(res => res.json())
                .then(res => {
                    this.setState({
                        singleBeds: res.singleBeds,
                        doubleBeds: res.doubleBeds,
                        bunkBeds: res.bunkBeds,
                        places: res.places,
                        info: res.info,
                        dates: res.dates,
                        id: res._id
                    });
                })
        } else {
            this.setState({
                singleBeds: this.props.fetchedData[fetched].singleBeds,
                doubleBeds: this.props.fetchedData[fetched].doubleBeds,
                bunkBeds: this.props.fetchedData[fetched].bunkBeds,
                places: this.props.fetchedData[fetched].places,
                info: this.props.fetchedData[fetched].info,
                dates: this.props.fetchedData[fetched].dates,
                id: this.props.fetchedData[fetched]._id
            });
        }
    }

    componentWillUnmount(){
        this.props.func(this.state);
    }

    render(){
        this.beds = <ul>
            {this.state.singleBeds > 0 && <li>Liczba łóżek pojedynczych: {this.state.singleBeds}</li>}
            {this.state.doubleBeds > 0 && <li>Liczba łóżek podwójnych: {this.state.doubleBeds}</li>}
            {this.state.bunkBeds > 0 && <li>Liczba łóżek piętrowych: {this.state.bunkBeds}</li>}
        </ul>;

        this.dates = this.state.dates && this.state.dates.map(el=>{
            return <li key={el}>{el}</li>
        });

        return <div className={'page-room_details'}>
            <div className={'room-back'}><Link to={`/rooms`}>Powrót</Link></div>
            <div className={'room-info'}>{this.state.info}</div>
            <div className={'room-beds'}>{this.beds}</div>
            <div className={'room-dates'}>
                <p>Zarezerwowane daty:</p>
                <ul>{this.dates}</ul>
            </div>
        </div>
    }
}

export {RoomDetails}