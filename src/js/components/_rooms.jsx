import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class Room extends React.Component{
    render(){
        return <article>
            <div>{this.props.children}</div>
            <div><Link to={`/rooms/${this.props.index}`}>więcej informacji</Link></div>
        </article>
    }
}

class Rooms extends React.Component{

    render(){
        return <section>
            <Room index={0}> Pokój dwuosobowy </Room>
            <Room index={1}> Pokój czteroosobowy </Room>
            <Room index={2}> Pokój pięcioosobowy </Room>
            <Room index={3}> Pokój ośmioosobowy </Room>
            <Room index={4}> Pokój dwunastoosobowy </Room>
        </section>
    }
}

export {Rooms}
