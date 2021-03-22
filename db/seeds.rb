# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Genre.delete_all
Movie.delete_all
test_user = User.create({username: 'demo-user', password: 'pass123'})
genres = Genre.create([{name: 'Action'}, {name: 'Horror'}, {name: 'Comedy'}])
dark_knight = Movie.create({title: 'The Dark Knight', description: "As Batman, Lt. Gordon and the district attorney continue to dismantle Gotham's criminal underground, a new villain threathens to undo their good work.", genre_id: 1, video_length: '2h 23m'})
