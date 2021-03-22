class LikedMovie < ApplicationRecord

    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List 

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

end
