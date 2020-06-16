import {ADD_MOVIES, ADD_FAVOURITES } from "../actions";

const initialMoviesState = {
    List: [],
    Favourites: []
}

export default function movies(state = initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         List: action.movies
    //     }
    // }
    // return state;

    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                List: action.movies
            }
        case ADD_FAVOURITES:
            return {
                ...state,
                Favourites: [action.movie, ...state.Favourites]
            }
        default:
            return state;
    }
}

