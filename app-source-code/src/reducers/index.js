import { combineReducers } from 'redux'
import { SET_WEATHER_DATA } from '../actions';

function weatherData(state={}, action){
  switch (action.type) {
    case SET_WEATHER_DATA:
      return action.data;
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weatherData
});

export default rootReducer;