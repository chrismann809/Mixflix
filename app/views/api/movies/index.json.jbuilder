# json.array! @movies do |movie|
#     json.extract! movie, :id, :title, :description, :genre_id
#     json.videoUrl url_for(movie.video)
# end