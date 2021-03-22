class CreateLikedMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :liked_movies do |t|
      t.integer :liker_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
  end
end
