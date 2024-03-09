import React from 'react';
import './css/WeatherData.css';
import WeatherCard from './WeatherCard';
// import Loader from './Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWeight } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'

class WeatherData extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            loading: true,
            error: null,
            data: undefined
        }
    }
    key = '7091411f576170eac56f8477dcb66bd9'

    componentDidMount(){
        this.fetchWeatherData()
    }

    fetchWeatherData = async () => {
        try {
            this.setState({loading: true, error: null})
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&appid=${this.key}&units=metric`)
            const data = await res.json()
            
            this.setState({
                loading: false, 
                error: null, 
                data: {
                    weather: {
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon
                    },
                    main: {
                        temp: data.main.temp,
                        feels_like: data.main.feels_like,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure
                    },
                    wind: {
                        speed: data.wind.speed
                    }
                }
            })
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render () {
        let data = this.state.data

        if(this.state.error) {
            return (
                <div>{this.state.error.message}</div>
            )
        }
        if(this.state.loading) {
            return (
                <div />
            )
        }
        return (
            <div className="container-weather">
                <WeatherCard data={data.weather} />

                <div className="weather-data">
                    <p>
                        <span className="icon temperature">
                            <FontAwesomeIcon icon={faThermometerThreeQuarters} />
                        </span>
                        Temperature: {data.main.temp}°C
                    </p>
                    <p>
                        <span className="icon thermal-sensation">
                            <FontAwesomeIcon icon={faFireAlt} />
                        </span>
                        Thermal sensation: {data.main.feels_like}°C
                    </p>
                    <p>
                        <span className="icon humidity">
                            <FontAwesomeIcon icon={faTint} />
                        </span>
                        Humidity: {data.main.humidity}%
                    </p>
                    <p>
                        <span className="icon pressure">
                            <FontAwesomeIcon icon={faWeight} />
                        </span>
                        Pressure: {data.main.pressure} mb
                    </p>
                    <p>
                        <span className="icon wind">
                            <FontAwesomeIcon icon={faWind} />
                        </span>
                        Wind speed: {data.wind.speed} km/h
                    </p>
                </div>
            </div>
        )
    }
}

export default WeatherData;
