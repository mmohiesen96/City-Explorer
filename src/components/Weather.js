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
      <h2>
        Weather for the next 14 days
      </h2>
      {
        this.props.weatherInfo.map((item,key) => {
          return (
            <Card
            key = {key}
            bg={'Warning'.toLowerCase()}
            text={'Warning'.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2 weatherCard"
        
          >
            <Card.Header>{item.date}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.cityName}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
          )
        })
      }
      </>
    )
  }
}

export default Weather;