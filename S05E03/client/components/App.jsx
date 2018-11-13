import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    spaceX: {
      apiURL: 'https://api.spacexdata.com/v3/launches',
      missions: [],
      latestMission: ''
    },
    weather: {
      apiURL: 'http://api.apixu.com/v1/current.json',
      key: '3ab2118b64934865a1b55006181311',
      city: 'Auckland',
      tempInC: null
    }
  }
  
  componentDidMount () {
    this.getSpaceXData()
    this.getWeatherData()
  }

  getSpaceXData () {
    const {apiURL} = this.state.spaceX

    request.get(apiURL)
      .then(res => {
        this.setState({
          spaceX: {
            missions: res.body,
            latestMission: this.getLatestMission(res.body)
          }
        })
      })
  }

  getWeatherData () {
    const {apiURL, key, city} = this.state.weather

    request.get(apiURL + '?key=' + key + '&q=' + city)
      .then(res => {
        this.setState({
          weather: {
            ...this.state.weather,
            tempInC: res.body.current.temp_c + '°C'
          }
        })
      })
  }

  getLatestMission (missions) {
    return missions.find(mission => mission.upcoming)
  }

  render () {
    return (
      <React.Fragment>
        <h1>Next SpaceX mission:</h1>
        <p>{this.state.spaceX.latestMission.mission_name}</p>
        <br />
        <h1>Weather in {this.state.weather.city}:</h1>
        <p>{this.state.weather.tempInC}</p>
      </React.Fragment>
    )
  }
}

export default App
