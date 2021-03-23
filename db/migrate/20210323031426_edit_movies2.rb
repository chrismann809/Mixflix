class EditMovies2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :year
    remove_column :movies, :video_length
    remove_column :movies, :content_rating
  end
end
