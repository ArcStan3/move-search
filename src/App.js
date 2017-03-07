import React, { Component } from 'react';
//import { map } from 'ramda'
import 'tachyons/css/tachyons.css'
import Search from './components/Search'
import Posters from './components/Posters'
import fetch from 'isomorphic-fetch'

const url = 'http://www.omdbapi.com/'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      movies: []
    }
    this.search = this.search.bind(this)
  }
  
  search({searchText, searchType}) {
    fetch(`${url}?s=${searchText.toLowerCase()}&type=${searchType.toLowerCase()}`)
      .then(res => res.json())
      .then(json => this.setState({ movies: json.Search, error: json.Error }))
  }
  
  render() {
    return (
      <div className="pa4">
      <h1>Movie Search</h1>
       <Search search={this.search} />
       {this.state.error ? <h2>{this.state.error}</h2> : null}
       {this.state.searchedFor ? <p>Searched for: {this.state.searchedFor}</p> : null}
       <Posters movies={this.state.movies} />
       //movies is a prop we pass into the Posters component 
      </div>
    );
  }
}

export default App
