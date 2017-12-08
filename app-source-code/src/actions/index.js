export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export function setWeatherData(data) {
  return {
    type: SET_WEATHER_DATA,
    data
  }
}