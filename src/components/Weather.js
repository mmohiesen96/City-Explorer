import React from 'react';

export class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: this.props.weatherInfo
    }
    console.log(this.props.weatherInfo);
  }


  // getWeatherData = async () => {
  //   // let backEndRoute = process.env.REACT_APP_SERVER;
  //   // console.log(backEndRoute);
  //   const url = `http://localhost:3001/weather?searchQuery=${this.props.cityQuery.toLowerCase()}`;

  //   const weatherData = await axios.get(url);


  //   this.setState({
  //     weatherInfo: weatherData.data
  //   })

  //   console.log(this.state.weatherInfo);
  // }


  render() {
    return (
      <>
      <p>
        {this.props.weatherInfo[3].lat}
      </p>
      </>
    )
  }
}

export default Weather;