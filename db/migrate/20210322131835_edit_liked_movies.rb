class EditLikedMovies < ActiveRecord::Migration[5.2]
  def change
    rename_column :liked_movies, :liker_id, :list_id
  end
end
