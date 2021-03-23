@genres.each do |genre|
    json.set! genre.name do 
        genre.movies.each do |movie|
            json.set! movie.title do
                json.extract! movie, :id, :title, :description, :video_length, :genre_id, :content_rating, :year
                json.videoUrl movie.video.attached? ? url_for(movie.video) : null
                json.icon movie.icon.attached? ? url_for(movie.icon) : null
                json.thumbnail movie.thumbnail.attached? ? url_for(movie.thumbnail) : null
            end
        end
    end
end