class List < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :liked_movies,
        foreign_key: :list_id,
        class_name: :LikedMovie

    has_many :movies,
        through: :liked_movies,
        source: :movie

end
