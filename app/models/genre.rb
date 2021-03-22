class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :movies,
        foreign_key: :genre_id,
        class_name: :Movie

end
