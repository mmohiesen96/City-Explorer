import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Movie extends React.Component {


    render() {
        return (
            <>
            <Card style={{ width: '18rem' }} className = "movieCard">
                                <Card.Img variant="top" src={this.props.src} alt = {this.props.title}/>
                                <Card.Body>
                                    <Card.Title>{this.props.title}</Card.Title>
                                    <Card.Text className = "textCard">
                                        Overview : {this.props.overview}<br></br>
                                        release date : {this.props.released_on}<br></br>
                                        Total votes : {this.props.total_votes}<br></br>
                                        Popularity : {this.props.popularity}<br></br>
                                        Average votes : {this.props.average_votes}<br></br>
                                    </Card.Text>
                                    <Button variant="primary" href= {this.props.src}>Check the poster</Button>
                                </Card.Body>
                            </Card>


            </>
        )
    }
}

export default Movie;




















                           