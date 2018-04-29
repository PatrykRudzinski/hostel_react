import React from 'react';

class Temp extends React.Component{
    render(){
        return <article className={'weather-temp'}>
            <div>{this.props.data - 273.15} &ordm;C</div>
        </article>
    }
}
// class Desc extends React.Component{
//     render(){
//         return <article className={'weather-desc'}>
//             <div>{this.props.data}</div>
//         </article>
//     }
// }
class Wind extends React.Component{
    render(){
        return <article className={'weather-wind'}>
            <div>Wiatr: {this.props.data} <sup>m</sup>/<sub>s</sub> </div>
        </article>
    }
}

class Pressure extends React.Component{
    render(){
        return <article className={'weather-pressure'}>
            <div>Ciśnienie: {this.props.data} hPa</div>
        </article>
    }
}

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ready: false,
            desc: null,
            temp: null,
            pressure: null,
            wind: null
        }
    }
    componentDidMount(){
        const apiKey = '846988b76bd5ebc2a770a26ca075598a';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=${apiKey}`;
        fetch(apiUrl).then(res=>res.json())
            .then(res=>{
                this.setState({
                    ready: true,
                    desc: res.weather[0].description,
                    temp: res.main.temp,
                    pressure: res.main.pressure,
                    wind: res.wind.speed
                });
        })
    }
    render(){
        if(this.state.ready) {
            return <section className={'page-weather'}>
                <Temp data={this.state.temp}/>
                {/*<Desc data={this.state.desc}/>*/}
                <Wind data={this.state.wind}/>
                <Pressure data={this.state.pressure}/>
            </section>
        } else {
            return null
        }
    }
}

export {Weather}