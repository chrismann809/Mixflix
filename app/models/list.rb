class List < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :movie_linkers,
        foreign_key: :list_id,
        class_name: :LikedMovie

    has_many :movies,
        through: :movie_linkers,
        source: :movie

end
