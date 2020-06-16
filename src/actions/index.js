// {
//     type: "ADD_MOVIES",

// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITES = "ADD_FAVOURITES";

export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const CHANGE_TAB = "CHANGE_TAB";

//action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}

export function addFavourites(movie){
  return {
      type: ADD_FAVOURITES,
      movie
    }
}

export function removeFavourites(movie){
  return {
      type: REMOVE_FROM_FAVOURITES,
      movie
    }
}

export function changeTab(val){
  return{
    type: CHANGE_TAB,
    val
  }
}