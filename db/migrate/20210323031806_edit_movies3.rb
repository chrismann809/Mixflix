class EditMovies3 < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer
    add_column :movies, :content_rating, :string
    add_column :movies, :video_length, :integer
  end
end
