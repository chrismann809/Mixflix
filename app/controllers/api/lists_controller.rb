class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)
        @user = User.find(params[:list][:user_id])
        render '/api/users/show'
    end

    def show
        @list = List.find(params[:id])
        render '/api/lists/show'
    end

    private

    def list_params
        params.require(:list).permit(:user_id)
    end

end
