class EditMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer
    add_column :movies, :content_rating, :string
  end
end
