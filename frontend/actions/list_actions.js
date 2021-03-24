import * as APIUtil from "../util/list_api_util";

export const CREATE_LIST = "CREATE_LIST";
export const RECEIVE_LIST = "RECEIVE LIST";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const REMOVE_MOVIE_FROM_LIST = "REMOVE_MOVIE_FROM_LIST"


const createMyList = list => ({
    type: CREATE_LIST,
    list
})

const receiveMyList = list => ({
    type: RECEIVE_LIST,
    list
})

const addMovieToMyList = list => ({
    type: ADD_MOVIE_TO_LIST,
    list
})

const removeMovieFromMyList = list => ({
    type: REMOVE_MOVIE_FROM_LIST,
    list
})



export const createList = userId => dispatch => 
    APIUtil.createList(userId)
    .then(list => dispatch(createMyList(list)))

export const receiveList = listId => dispatch => 
    APIUtil.fetchList(listId)
    .then(list => dispatch(receiveMyList(list)))

export const addMovieToList = movie => dispatch =>
    APIUtil.addMovieToList(movie)
    .then(list => dispatch(addMovieToMyList(list)))

export const removeMovieFromList = movieId => dispatch =>
    APIUtil.removeMovieFromList(movieId)
    .then(list => dispatch(removeMovieFromMyList(list)))