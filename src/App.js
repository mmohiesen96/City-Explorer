
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card , Alert} from 'react-bootstrap/';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultQuery: '',
      foundQuery: '',
      showAlert: false,
      displayCard: false,
      showMap: false
    }
  }

  getQuery = async (event) => {
    event.preventDefault();
    let locationLink = `https://eu1.locationiq.com/v1/search.php?key=pk.80438a552b9686e0e4dace4a068a30eb&q=${this.state.resultQuery}&format=json`;
    try {
      let city = await axios.get(locationLink);
      this.setState({
        foundQuery: city.data[0],
        displayCard: true,
        showMap: true,
        showAlert: false
      })
    }

    catch {
      this.setState({
        showAlert: true,
        showMap: false
      })
    }
  }

  updateResultQuery = event => {
    this.setState({
      resultQuery: event.target.value
    })
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
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
  </Button>
        </Form>{
          this.state.displayCard &&
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
      </>
    )

  }
}

export default App;
