json.id @list.id

#json.movies @list.movies

json.movies @list.movies do |movie|
    json.extract! movie, :id, :title, :description, :video_length, :genre_id, :content_rating, :year
    json.videoUrl movie.video.attached? ? url_for(movie.video) : null
    json.icon movie.icon.attached? ? url_for(movie.icon) : null
    json.thumbnail movie.thumbnail.attached? ? url_for(movie.thumbnail) : null
end

json.movie_linkers @list.movie_linkers