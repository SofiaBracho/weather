<div align="center">
  <h1 align="center">Weather React App</h1>
</div>
<br/>

<div align="center">

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://www.php.net/)
<br/>
<br/>
<a href="https://www.linkedin.com/in/sofiabrach0/">
![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=for-the-badge)
</a>
<a href="https://github.com/SofiaBracho">
![GitHub Badge](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=for-the-badge)
</a>
</div>


This is a simple Weather React App that displays the current weather of the user's location. The app uses the TrueWay Geocoding API to get the user's location and the OpenWeatherMap API to get the weather data.


## ⚙️ Key Features
- **Get coordinates**: The app uses the `navigator.geolocation.getCurrentPosition()` method to get the user's current location.
- **Reverse geolocation**: The `fetchGeolocation()` method is called with the user's latitude and longitude to get the user's city and country from the TrueWay Geocoding API.
- **Fetch weather data**: The `fetchWeatherData()` method is called with the user's city and country to get the weather data from the OpenWeatherMap API. The weather data is displayed on the screen using the WeatherData component.


## 🖥️ Demo

![Diary Demo GIF](https://github.com/SofiaBracho/weather/blob/master/src/img/demo.gif) 


## 🛠️ Getting Started

## Prerequisites

Here's what you need to be able to run this App:

- Node.js installed
- NPM (Node Package Manager) installed

### 1. Clone the repository
Execute the following commands:

```shell
git clone https://github.com/SofiaBracho/weather.git
cd weather
```

### 2. Install dependencies
Execute the command:
```shell
npm install
```

### 3. Run local server

```shell
npm start
```


## 🔀 Contributing

This wheather app is open to anyone from the community to contribute. If you'd like to, fork the repository and make changes. Pull requests are welcome.

### 👥 Author

<a href="https://github.com/SofiaBracho">
  <img src="https://github.com/SofiaBracho/weather/blob/master/src/img/author.png" width="50px" alt="Author"/>
</a>

**Sofia Bracho**
<br>
Web developer