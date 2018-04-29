import React from 'react';
import Wifi from 'react-icons/lib/fa/wifi';
import Price from 'react-icons/lib/fa/dollar';
import Pet from 'react-icons/lib/fa/paw';

class Hero extends React.Component{
    render(){
        return <section className={'page-hero'}>
            <h1>Najlepszy hostel w mieście</h1>
        </section>
    }
}

class OffertArticle extends React.Component{
    render(){
        return <article className={'offert-item'}>
            <div>{this.props.children}</div>
            <p>{this.props.content}</p>
        </article>
    }
}

class Offert extends React.Component{
    render(){
        return <section className={'page-offert'}>
            <OffertArticle content='Darmowe WiFi w każdym pokoju'>
                <Wifi size={70} color="#777"/>
            </OffertArticle>
            <OffertArticle content='Gwarancja najniższej ceny'>
                <Price size={70} color="#777"/>
            </OffertArticle>
            <OffertArticle content='Przyjedź ze swoim pupilem'>
                <Pet size={70} color="#777"/>
            </OffertArticle>
        </section>
    }
}

class HomePage extends React.Component{
    render(){
        return <main>
            <Hero />
            <Offert/>
        </main>
    }
}

export {HomePage}