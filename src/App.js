import React from 'react';
import WeatherData from './components/WeatherData';
import Loader from './components/Loader';
import './App.css';
// import Search from './components/Search';

class App extends React.Component {
    // key = 'UBzmmlA0RJpmYMneNcrKATOXp7QRhgp0'
    options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb547ef331mshbe5eaf9b7ddadafp1f9dbfjsnc2dcc616ce8a',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    }
    endpoint = 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode'

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            coords: undefined,
            city: undefined,
            warn: false
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    coords: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                })

                // let accurancy = (position.coords.accuracy)
                
                // SHOW ERROR MESSAGE IF GPS IS NOT ACCURATE
                if (position.coords.accuracy > 10) {
                    alert("The GPS accuracy isn't good enough")
                }
                this.fetchGeolocation()
            },
            err => {
                alert(`Error: ${err.message}`)
            },
            {enableHighAccuracy: true}
        )
        
    }

    fetchGeolocation = async () => {
        this.setState({loading: true, error: null})
        
        try {
            // let response = await fetch( `${this.endpoint}?key=${this.key}&location=${this.state.coords.latitude},${this.state.coords.longitude}`)
            let response = await fetch(`${this.endpoint}?location=${this.state.coords.latitude}%2C${this.state.coords.longitude}&language=en`, this.options)
            let json = await response.json()
    
            //SETTING COUNTRY AND CITY NAMES
            this.setState({
                // country: json.results[0].locations[0].adminArea1,
                // city: json.results[0].locations[0].adminArea5
                country: json.results[0].country,
                city: json.results[0].locality
            })
            
            this.setState({loading: false, error: null})
        } catch (error) {
            this.setState({loading: false, error: error})
        }

    }
    
    render() {
        if (this.state.error) {
            return `Error! ${this.state.error.message}`;
        }

        if (this.state.loading) {
            return <Loader />
        }

        return(
            <React.Fragment>
                <div className='container'>
                    <div className="elements">
                        {/* <Search /> */}
                        <h1>The wheather today in:</h1>
                        <h2>{this.state.city}, {this.state.country}</h2>
                        <WeatherData coords={this.state.coords} />
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default App;
