import {ADD_MOVIES, 
    ADD_FAVOURITES, 
    REMOVE_FROM_FAVOURITES, 
    CHANGE_TAB } from "../actions";

const initialMoviesState = {
    List: [],
    Favourites: [],
    showFavTab: false
}

export function movies(state = initialMoviesState, action){
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
        case REMOVE_FROM_FAVOURITES:
            const filterArr = state.Favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                Favourites: filterArr
            }
        case CHANGE_TAB:
            return{
                ...state,
                showFavTab: action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};

export function search(state= initialSearchState, action){
    return state;
}


const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

export default function rootReducer (state = initialRootState, action){
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}