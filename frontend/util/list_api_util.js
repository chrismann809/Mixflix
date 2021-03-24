export const createList = list => {
    return $.ajax({
        url: "/api/lists",
        method: "POST",
        data: { list }
    })
}

export const fetchList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: "GET",
        data: {id: listId}
    })
}

export const addMovieToList = movie => (
    $.ajax({
        url: "/api/liked_movies",
        method: "POST",
        data: { liked_movie: movie }
    })
)

export const removeMovieFromList = movieId => (
    $.ajax({
        url: `/api/liked_movies/${movieId}`,
        method: "POST",
        data: { movieId }
    })
)