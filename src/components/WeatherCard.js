import React from 'react';
import './css/WeatherCard.css';

class WeatherCard extends React.Component {
    render() {
        return (
            <div className='weather-resume'>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} alt="Cloudy Icon" />
                    <p>{this.props.data.main}</p>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default WeatherCard;