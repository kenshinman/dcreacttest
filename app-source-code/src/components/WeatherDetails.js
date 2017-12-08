import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';


class WeatherDetails extends Component {
  state = {
    unit: 'metric'
  }

  render() {
    if (this.props.weatherData.weather) {

      let { name, weather, wind, dt, main } = this.props.weatherData;

      return (
        <div className="row">
          <h3 className="text-center"><i className="fa fa-map-marker" aria-hidden="true"></i>  {name}</h3>
          <div className="col-md-6 col-sm-8">
            <ul className="list-group">
            <li className="list-group-item">
              <p><strong>Current Date and Time: </strong> <br/><Moment format="YYYY/MM/DD hh:mm a" >{Date.now()}</Moment> </p>
            </li>
              <li className="list-group-item">
                <p>
                  <strong>Date and Time Calculated: </strong> <br/> <Moment format="YYYY/MM/DD hh:mm a">{dt * 1000}</Moment>
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <strong>Temperature: </strong> {main.temp}&deg; {this.props.measurements.degUnit}
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <strong>Description: </strong> {weather[0].main}, {weather[0].description}
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <strong>Wind Speed: </strong> {wind.speed} {this.props.measurements.speedUnit}
                </p>
              </li>

            </ul>
          </div>
          <div className="col-md-6 col-sm-4">

          </div>
        </div>
      )
    } else {
      return <h3 className="text-center">Loading...</h3>
    }
  }
}
function mapStateToProps(state) {
  return {
    weatherData: state.weatherData
  };
}
export default connect(mapStateToProps, null)(WeatherDetails);