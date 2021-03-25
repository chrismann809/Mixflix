json.id @list.id

#json.movies @list.movies

json.movies @list.movies do |movie|
    json.extract! movie, :id, :title, :description, :video_length, :genre_id, :content_rating, :year
    json.videoUrl movie.video.attached? ? url_for(movie.video) : ""
    json.icon movie.icon.attached? ? url_for(movie.icon) : ""
    json.thumbnail movie.thumbnail.attached? ? url_for(movie.thumbnail) : ""
end

json.movie_linkers @list.movie_linkers