class Api::LikedMoviesController < ApplicationController

    def create
        @liked_movie = LikedMovie.new(liked_movie_params)
        list_id = params[:liked_movie][:list_id]
        @list = List.find(list_id)

        if @liked_movie.save!
            render '/api/lists/show'
        end
    end

    def destroy
        @liked_movie = LikedMovie.find(params[:id])
        list_id = @liked_movie.list.id
        @liked_movie.destroy
        @list = List.find(list_id)
        render '/api/lists/show'
    end

    private

    def liked_movie_params
        params.require(:list_movie).permit(:list_id, :movie_id)
    end
    
end
