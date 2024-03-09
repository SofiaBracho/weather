# Weather React App
This is a simple Weather React App that displays the current weather of the user's location. The app uses the TrueWay Geocoding API to get the user's location and the OpenWeatherMap API to get the weather data.

## Prerequisites
* Node.js installed
* NPM (Node Package Manager) installed


## Getting Started
1. Clone the repository to your local machine.
2. Run npm install to install all the dependencies.
3. Run npm start to start the development server.
4. Open your browser and go to http://localhost:3000/ to view the app.


## How it Works
The app uses the navigator.geolocation.getCurrentPosition() method to get the user's current location.
The fetchGeolocation() method is called with the user's latitude and longitude to get the user's city and country from the TrueWay Geocoding API.
The fetchWeatherData() method is called with the user's city and country to get the weather data from the OpenWeatherMap API.
The weather data is displayed on the screen using the WeatherData component.

## Components

- App: The main component that contains the app's state and logic.
- Loader: A component that displays a loading spinner while the app is getting the user's location and weather data.
- WeatherData: A component that displays the weather data.
- Search: A component that allows the user to search for a city and display its weather data (not enabled yet).

## Files
- App.js: The main file that contains the App component.
components/: A directory that contains all the app's components.
components/Loader.js: A file that contains the Loader component.
components/WeatherData.js: A file that contains the WeatherData component.
components/Search.js: A file that contains the Search component.
- App.css: A file that contains the app's styles.

## Dependencies
- React: A JavaScript library for building user interfaces.
- React-router-dom: A collection of navigational components for React Router.
License