class Movie < ApplicationRecord
    validates :title, :genre_id, :description, presence: true

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre

    has_many :list_linkers,
        foreign_key: :movie_id,
        class_name: :LikedMovie

    has_one_attached :video
    has_one_attached :icon
    has_one_attached :thumbnail

end
