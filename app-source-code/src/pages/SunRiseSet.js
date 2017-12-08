import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setWeatherData } from '../actions'

class SunRiseSet extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    if(this.props.weatherData.sys){
      this.setState({ready: true})
    }else{
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=2332453&appid=1d59ef980621083dd0cbc582a8d22bb1`)
      .then(response => response.json())
      .then(data => {
        
        if(this.props.setWeatherData(data)){
          this.setState({ready: true})
        }
      })
    }
  }

  render() {
    
    if(this.state.ready){
      console.log(this.props.weatherData)
      const { sunset, sunrise } = this.props.weatherData.sys;
      return (
        <div className="container wrap">
          <h2 className="text-center">Sun Rise/ Sun Set App</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <p>
                <strong>Current Date/Time: </strong>
                <Moment format="YYYY/MM/DD hh:mm a">{Date.now()}</Moment>
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <strong>Sunrise Time: </strong>
                <Moment format="YYYY/MM/DD hh:mm a">{sunrise * 1000}</Moment>
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <strong>Sunset Time: </strong>
                <Moment format="YYYY/MM/DD hh:mm a">{sunset * 1000}</Moment>
              </p>
            </li>
          </ul>
        </div>
      );
    }else{
      return <h3 className="text-center">Loading...</h3>
    }
  }
}
function mapStateToProps(state) {
  return {
    weatherData: state.weatherData
  }
}

export default withRouter(connect(mapStateToProps, {setWeatherData})(SunRiseSet));
