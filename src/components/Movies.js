import React from 'react';
import Movie from './Movie'


class Movies extends React.Component {

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
                            <Movie key = {key} src = {item.image_url}  title = {item.title} overview = {item.overview} released_date = {item.released_on}
                                votes = {item.total_votes}
                                popularity  = {item.popularity}
                                average_votes = {item.average_votes} 
                            ></Movie>
                        )
                    })
                }
            </>
        )
    }
}

export default Movies;