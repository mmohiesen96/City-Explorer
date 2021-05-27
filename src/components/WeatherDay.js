import React from 'react';
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component {

    render() {
        return (
            <>
                <Card
                    bg={'Warning'.toLowerCase()}
                    text={'Warning'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 weatherCard"

                >
                    <Card.Header>{this.props.header}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>
                            {this.props.data}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default WeatherDay;