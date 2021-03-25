# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Genre.delete_all
Movie.delete_all
LikedMovie.destroy_all
List.destroy_all

test_user = User.create({username: 'demo-user', password: 'pass123'})

# genres = Genre.create([{name: 'Action'}, {name: 'Horror'}, {name: 'Comedy'}, {name: 'Animation'}])
action = Genre.create({name: 'Action'})
horror = Genre.create({name: 'Horror'})
comedy = Genre.create({name: 'Comedy'})
animation = Genre.create({name: 'Animation'})


batman_begins = Movie.create({
    title: 'Batman Begins',
    description: "As a toxic threat endangers a corrupt city, Bruce Wayne finds himself at odds with a league of assassins and forced to battle more than his own demons.",
    genre_id: action.id, 
    video_length: '2h 19m', 
    year: 2005, 
    content_rating: "PG-13"
})

# batman_begins.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/batman-begins-video.mp4"), filename: "batman-begins-video.mp4")
batman_begins.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/batman-begins-icon.png"), filename: "batman-begins-icon.png")
batman_begins.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/batman-begins-thumb.jpg"), filename: "batman-begins-thumb.jpeg")



the_dark_knight = Movie.create({
    title: 'The Dark Knight',
    description: "As Batman, Lt. Gordon and the district attorney continue to dismantle Gotham's criminal underground, a new villain threathens to undo their good work.",
    genre_id: action.id, 
    video_length: '2h 23m', 
    year: 2008, 
    content_rating: "PG-13"
})

# the_dark_knight.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/the-dark-knight-video.mp4"), filename: "the-dark-knight-video.mp4")
the_dark_knight.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/the-dark-knight-icon.png"), filename: "the-dark-knight-icon.png")
the_dark_knight.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/the-dark-knight-thumb.jpg"), filename: "the-dark-knight-thumb.jpeg")


code_8 = Movie.create({
    title: 'Code 8',
    description: "In a city where super-powered people are ostracized, an earnest day laborer considers using his outlawed abilities for money to save his sick mother.",
    genre_id: action.id, 
    video_length: '1h 38m', 
    year: 2019, 
    content_rating: "TV-MA"
})

# code_8.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/code-8-video.mp4"), filename: "code-8-video.mp4")
code_8.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/code-8-icon.png"), filename: "code-8-icon.png")
code_8.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/code-8-thumb.jpg"), filename: "code-8-thumb.jpeg")



enter_the_dragon = Movie.create({
    title: 'Enter the Dragon',
    description: "Recruited by a British agent, Shaolin master Lee infiltrates a remote island and a brutal martial arts tournament to spy on a sinister crime lord.",
    genre_id: action.id, 
    video_length: '1h 42m', 
    year: 1973, 
    content_rating: "R"
})

# enter_the_dragon.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/enter-the-dragon-video.mp4"), filename: "enter-the-dragon-video.mp4")
enter_the_dragon.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/enter-the-dragon-icon.png"), filename: "enter-the-dragon-icon.png")
enter_the_dragon.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/enter-the-dragon-thumb.jpg"), filename: "enter-the-dragon-thumb.jpeg")



ghost_rider = Movie.create({
    title: 'Ghost Rider',
    description: "After selling his soul to save a loved one, daredevil biker Johnny Blaze pays the price by becoming a flame-skulled bounty hunter for Mephistopheles.",
    genre_id: action.id, 
    video_length: '1h 50m', 
    year: 2007, 
    content_rating: "PG-13"
})

# ghost_rider.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/ghost-rider-video.mp4"), filename: "ghost-rider-video.mp4")
ghost_rider.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/ghost-rider-icon.png"), filename: "ghost-rider-icon.png")
ghost_rider.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/ghost-rider-thumb.jpg"), filename: "ghost-rider-thumb.jpeg")



inception = Movie.create({
    title: 'Inception',
    description: "A troubled thief who extracts secrets from people's dreams takes one last job: leading a dangerous mission to plant an idea in a target's subconscious.",
    genre_id: action.id, 
    video_length: '2h 28m', 
    year: 2010, 
    content_rating: "PG-13"
})

# inception.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/inception-video.mp4"), filename: "inception-video.mp4")
inception.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/inception-icon.png"), filename: "inception-icon.png")
inception.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/inception-thumb.jpg"), filename: "inception-thumb.jpeg")



parker = Movie.create({
    title: 'Parker',
    description: "Parker is a thief -- but he has scruples. So when his crew double-crosses him, Parker teams up with an unlikely partner to even the score.",
    genre_id: action.id, 
    video_length: '1h 58m', 
    year: 2013, 
    content_rating: "R"
})

# parker.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/parker-video.mp4"), filename: "parker-video.mp4")
parker.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/parker-icon.png"), filename: "parker-icon.png")
parker.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/parker-thumb.jpg"), filename: "parker-thumb.jpeg")



quantum_of_solace = Movie.create({
    title: 'Quantum of Solace',
    description: "Picking up an hour after the events of 2006's Casino Royale, this James Bond adventure finds 007 tracking a traitor who's infiltrated Britain's MI6.",
    genre_id: action.id, 
    video_length: '1h 46m', 
    year: 2008, 
    content_rating: "PG-13"
})

# quantum_of_solace.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/quantum-of-solace-video.mp4"), filename: "quantum-of-solace-video.mp4")
quantum_of_solace.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/quantum-of-solace-icon.png"), filename: "quantum-of-solace-icon.png")
quantum_of_solace.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/quantum-of-solace-thumb.jpg"), filename: "quantum-of-solace-thumb.jpeg")



real_steel = Movie.create({
    title: 'Real Steel',
    description: "A struggling fighter-turned-promoter reconnects with his estranged son to convert an old-generation robot into a mighty World Robot Boxing contender.",
    genre_id: action.id, 
    video_length: '2h 7m', 
    year: 2011, 
    content_rating: "PG-13"
})

# real_steel.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/real-steel-video.mp4"), filename: "real-steel-video.mp4")
real_steel.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/real-steel-icon.png"), filename: "real-steel-icon.png")
real_steel.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/real-steel-thumb.jpg"), filename: "real-steel-thumb.jpeg")



sherlock_holmes = Movie.create({
    title: 'Sherlock Holmes',
    description: "The game is afoot for an eccentric detective who must use his brains and brawn to track down a nefarious nemesis with the help of his partner.",
    genre_id: action.id, 
    video_length: '2h 8m', 
    year: 2009, 
    content_rating: "PG-13"
})

# sherlock_holmes.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/sherlock-holmes-video.mp4"), filename: "sherlock-holmes-video.mp4")
sherlock_holmes.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/sherlock-holmes-icon.png"), filename: "sherlock-holmes-icon.png")
sherlock_holmes.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/sherlock-holmes-thumb.jpg"), filename: "sherlock-holmes-thumb.jpeg")



the_spy_next_door = Movie.create({
    title: 'The Spy Next Door',
    description: "While babysitting, an undercover agent is thrust back into the world of top-secret adventure when one his young charges downloads a classified file.",
    genre_id: action.id, 
    video_length: '1h 34m', 
    year: 2010, 
    content_rating: "PG"
})

# the_spy_next_door.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/the-spy-next-door-video.mp4"), filename: "the-spy-next-door-video.mp4")
the_spy_next_door.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/action/the-spy-next-door-icon.png"), filename: "the-spy-next-door-icon.png")
the_spy_next_door.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/action/the-spy-next-door-thumb.jpg"), filename: "the-spy-next-door-thumb.jpeg")



paul_blart = Movie.create({
    title: 'Paul Blart: Mall Cop',
    description: "An overzealous security guard finds himself in over his head when he tries to thwart a criminal mastermind's plot to rob an entire shopping mall.",
    genre_id: comedy.id, 
    video_length: '1h 31m', 
    year: 2009, 
    content_rating: "PG"
})

# the_spy_next_door.video.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/videos/action/the-spy-next-door-video.mp4"), filename: "the-spy-next-door-video.mp4")
paul_blart.icon.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/icons/comedy/paul_blart_icon.png"), filename: "the-spy-next-door-icon.png")
paul_blart.thumbnail.attach(io: open("https://s3.amazonaws.com/mixflix-aa-seeds/thumbs/comedy/paul_blart_thumb.jpg"), filename: "the-spy-next-door-thumb.jpeg")

test_user_list = List.create({user_id: test_user.id})

test_user_liked_movies = LikedMovie.create({list_id: test_user_list.id, movie_id: the_dark_knight.id})