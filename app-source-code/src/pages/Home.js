import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeatherData } from '../actions';
import WeatherDetails from '../components/WeatherDetails'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      unit: 'metric'
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=2332453&appid=1d59ef980621083dd0cbc582a8d22bb1&units=${this.state.unit}`)
    .then(response => response.json())
    .then(data => this.props.setWeatherData(data))
  }
  switchUnits(unit){
    this.setState({unit}, () =>{
      this.fetchData();
    })
  }

  render() {
    let measurements;
    if (this.state.unit === 'metric') {   
      measurements = {
        degUnit: 'Celsius',
        speedUnit: 'meter/sec'
      }
    } else if (this.state.unit == 'imperial') {
      measurements = {
        degUnit: 'Fahrenheit',
        speedUnit: 'miles/hour.'
      }
    } else {
      measurements = {
        degUnit: 'Kelvin',
        speedUnit: 'meter/sec.'
      }
    }

    return (
      <div className="container wrap">
        <div className="row">
          <div className="col-md-12">
          <h5 className="text-center">Select Unit</h5>
          <p className='text-cdnter'>
            <button className="btn btn-primary" onClick={() => {this.switchUnits('metric')}}>Metrics</button>
            <button className="btn btn-default" onClick={() => {this.switchUnits('imperial')}}>Imperial</button>
            <button className="btn btn-warning" onClick={() => {this.switchUnits('kelvin')}}>Kelvin</button>
            </p>
          </div>
        </div>
        <h2 className="text-center">Weather App</h2>
        <WeatherDetails measurements={measurements} />
      </div>
    );
  }
}

export default connect(null, { setWeatherData })(Home);