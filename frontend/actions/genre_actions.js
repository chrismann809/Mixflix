import * as APIUtil from '../util/genres_api_util'

export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
})

export const fetchGenres = () => dispatch => 
    APIUtil.fetchGenres()
    .then(genres => dispatch(receiveGenres(genres)))