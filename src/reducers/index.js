import {ADD_MOVIES} from "../actions";

const initialMoviesState = {
    List: [],
    Favourites: []
}

export default function movies(state = initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            List: action.movies
        }
    }
    return state;
}

