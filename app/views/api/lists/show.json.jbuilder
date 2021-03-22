json.id @list.id

#json.movies @list.movies

json.movies @list.movies do |movie|
    json.extract! movie, :id, :title, :description, :video_length, :genre_id
end


json.liked_movies @list.liked_movies