import React from 'react';
import { map, pathOr } from 'ramda'

class Posters extends React.Component {
  
  render() {
    const poster = (movie) => {
    return (<img key={movie.imdbID} src={movie.Poster} alt={movie.Name} />)
  }
    return (
      <section>
      <h2>Results</h2>
        {map(poster, this.props.movies)}
      </section>
    )
  }
}

export default Posters