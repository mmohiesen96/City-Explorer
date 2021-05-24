import React from 'react';
import Card from 'react-bootstrap/Card'

export class Weather extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.props = {
  //     weatherInfo: this.props.weatherInfo
  //   }
  //   console.log(this.props.weatherInfo);
  // }


  // getWeatherData = async () => {
  //   // let backEndRoute = process.env.REACT_APP_SERVER;
  //   // console.log(backEndRoute);
  //   const url = `http://localhost:3001/weather?searchQuery=${this.props.cityQuery.toLowerCase()}`;

  //   const weatherData = await axios.get(url);


  //   this.setprops({
  //     weatherInfo: weatherData.data
  //   })

  //   console.log(this.props.weatherInfo);
  // }


  render() {
    return (
      <>
      <Card
    bg={'Warning'.toLowerCase()}
    text={'Warning'.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{this.props.weatherInfo[3].lat}    {this.props.weatherInfo[4].lon}</Card.Header>
    <Card.Body>
      <Card.Title> Weather</Card.Title>
      <Card.Text>
          {this.props.weatherInfo[0].date}<br></br>
          {this.props.weatherInfo[0].description}<br></br>
          {this.props.weatherInfo[1].date}<br></br>
          {this.props.weatherInfo[1].description}<br></br>
          {this.props.weatherInfo[2].date}<br></br>
          {this.props.weatherInfo[2].description}<br></br>
      </Card.Text>
    </Card.Body>
  </Card>
      </>
    )
  }
}

export default Weather;