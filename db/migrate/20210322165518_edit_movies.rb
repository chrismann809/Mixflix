class EditMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer, null: false
    add_column :movies, :content_rating, :string, null: false
  end
end
