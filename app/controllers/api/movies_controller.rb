class Api::MoviesController < ApplicationController

    def show
        Movie.find(params[:id])
    end

end
