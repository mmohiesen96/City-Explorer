
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Alert } from 'react-bootstrap/';
import axios from 'axios';
import Weather from './components/Weather';
import Movie from './components/Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultQuery: '',
      foundQuery: '',
      showAlert: false,
      displayCard: false,
      showMap: false,
      showWeather: false,
      weatherInfo: [],
      showMovies : false,
      movieInfo : []
    }
  }
  getQuery = async (event) => {
    this.state.weatherInfo.length = 4;
    event.preventDefault();
    const herokuUrl = process.env.REACT_APP_HEROKU;
    const url = `${herokuUrl}/weather?searchQuery=${this.state.resultQuery.toLowerCase()}`;
    const movieUrl = `${herokuUrl}/movies?searchQuery=${this.state.resultQuery.toLowerCase()}`;
    console.log(url);

    let locationLink = `https://eu1.locationiq.com/v1/search.php?key=pk.80438a552b9686e0e4dace4a068a30eb&q=${this.state.resultQuery}&format=json`;
    try {
      const movieData = await axios.get(movieUrl);
      const weatherData = await axios.get(url);
      let city = await axios.get(locationLink);
      console.log(weatherData);
      this.setState({
        foundQuery: city.data[0],
        showMap: true,
        showAlert: false,
        weatherInfo: weatherData.data,
        showWeather: true,
        showMovies : true,
        movieInfo : movieData.data
      })
      console.log(this.state.weatherInfo);
    }
    catch (err){
      this.setState({
        showAlert: true,
        showMap: false,
        showWeather: false,
        showMovies:false
      })
    }


  }

  updateResultQuery = event => {
    this.setState({
      resultQuery: event.target.value
    });
    console.log(this.state.resultQuery);
  }
  render() {
    return (
      <>
        {
          this.state.showAlert &&
          <Alert variant='danger'>
            Enter a proper City name Please !!
        </Alert>
        }
                <Form onSubmit={this.getQuery}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter City" onChange={this.updateResultQuery} />
            <Form.Text className="text-muted">
              Enter The City You want to Explore
    </Form.Text>
          <Button variant="warning" type="submit">
            Explore!
  </Button>
          </Form.Group>
  {
          this.state.showMap &&
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.80438a552b9686e0e4dace4a068a30eb&q=&center=${this.state.foundQuery.lat},${this.state.foundQuery.lon}`} />
            <Card.Body>
              <Card.Title>{this.state.foundQuery.display_name}</Card.Title>
              <Card.Text>
                {this.state.foundQuery.lat}<br></br>
                {this.state.foundQuery.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        }
        </Form>
          {
          this.state.weatherInfo.length &&
          <Weather cityQuery={this.state.resultQuery} weatherInfo={this.state.weatherInfo} cityName = {this.state.resultQuery}>
          </Weather>
        }
        {
          this.state.showMovies &&
          <Movie movieArr = {this.state.movieInfo} showMovies = {this.state.showMovies}></Movie>
        }
      </>
    )

  }
}

export default App;
