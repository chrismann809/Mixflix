class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.timestamps
    end
    add_column :movies, :video_length, :string, null: false
  end
end
