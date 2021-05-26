import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movieInfo: []
        }
    }
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
                Popular Movies
            </h2>
                {
                    this.props.movieArr.map((item, key) => {
                        return (
                            <Card style={{ width: '18rem' }} className = "movieCard" key = {key}>
                                <Card.Img variant="top" src={item.image_url} alt = {item.title}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text className = "textCard">
                                        Overview : {item.overview}<br></br>
                                        release date : {item.released_on}<br></br>
                                        Total votes : {item.total_votes}<br></br>
                                        Popularity : {item.popularity}<br></br>
                                        Average votes : {item.average_votes}<br></br>
                                    </Card.Text>
                                    <Button variant="primary" href= {item.image_url}>Check the poster</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </>
        )
    }
}

export default Movie;