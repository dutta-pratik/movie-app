import React from 'react';
import '../App.css';
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, changeTab} from "../actions";

class App extends React.Component {

  componentDidMount(){
    const {store} = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    //make API call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());

  }

  isFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    const index = movies.Favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  handlechangeTab = (val) => {
    this.props.store.dispatch(changeTab(val));
  }

  render(){
    const {movies} = this.props.store.getState(); // state has {movies:[], Search:[]}
    const {List, Favourites, showFavTab} = movies; 
    console.log(this.props.store.getState());
    const displyMovie = showFavTab ? Favourites : List;
    return (
      <div className="App">
        <Navbar />
          <div className="main">
            <div className="tabs">
              <div className={`tab ${showFavTab ? "" : "active-tabs"}`} onClick = {() => this.handlechangeTab(false)}>
                Movies
              </div>
              <div className={`tab ${showFavTab ? "active-tabs" : ""}`} onClick = {() => this.handlechangeTab(true)}>
                Favourites
              </div>
            </div>
            <div className="list">
              
              {(displyMovie.length < 1) 
                ? <div><h3>No Movies Available</h3></div>
                : displyMovie.map((movie, index) => (
                  <MovieCard 
                    movie={movie} 
                    key={`movies-${index}`} 
                    dispatch={this.props.store.dispatch}
                    isFavourite = {this.isFavourite(movie)}
                  />
              ))}
            </div>
          </div>
      </div>
    );
  }
  
}

export default App;