import React from 'react';
import WeatherDay from './WeatherDay';



class Weather extends React.Component {

  render() {
    return (
      <>
        <h2>
          Weather for the next 4 days
      </h2>
        {
          this.props.weatherInfo.map((item, key) => {
            return (
              <WeatherDay header = {item.date} data = {item.description} key = {key}></WeatherDay>
            )
          })
        }
      </>
    )
  }
}

export default Weather;