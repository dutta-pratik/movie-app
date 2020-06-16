import React from 'react';
import '../App.css';
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies} from "../actions";

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
    const {Favourites} = this.props.store.getState();
    const index = Favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  render(){
    const {List} = this.props.store.getState(); // state has {List:[], Fav:[]}
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab">
                Movies
              </div>
              <div className="tab">
                Favourites
              </div>
            </div>
            <div className="list">
              {List.map((movie, index) => (
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