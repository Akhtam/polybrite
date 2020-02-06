# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Course.delete_all
User.delete_all
Category.delete_all
Topic.delete_all

# stime = DateTime.new(2020,1,4,5,00,00)
# etime = DateTime.new(2020,3,1,8,00,00)

# #USERS
u1 = User.create!(email: 'tutu@gmail.com', first_name: 'Jim', last_name: 'Halpert', password: '87654321')
u2 = User.create!(email: 'rara@gmail.com', first_name: 'Mic', last_name: 'Scarn', password: '5454343242')
u3 = User.create!(email: 'bobo@gmail.com', first_name: 'Creed', last_name: 'Cr', password: '8765432431')
u4 = User.create!(email: 'lolo@gmail.com', first_name: 'Yosho', last_name: 'None', password: '84354321')

#CATEGORIES
music = Category.create!(name: 'Music')
science = Category.create!(name: 'Science')
tech = Category.create!(name: 'Tech')
dance = Category.create!(name: 'Dance')
art = Category.create!(name: 'Art')

#TOPICS
# Music-Category
piano = Topic.create!(name: 'Piano')
guitar = Topic.create!(name: 'Guitar')
violin = Topic.create!(name: 'Violin')
flute = Topic.create!(name: 'flute')
# science
astrobiology = Topic.create!(name: 'Astrobiology')
cosmology = Topic.create!(name: 'Cosmology')
galaxies = Topic.create!(name: 'Galaxies')
nebulae = Topic.create!(name: 'Nebulae')
# tech
javascript = Topic.create!(name: 'Javascript')
ruby = Topic.create!(name: 'Ruby')
redux = Topic.create!(name: 'redux')
d3 = Topic.create!(name: 'D3')
#dance
salsa = Topic.create!(name: 'Salsa')
tango = Topic.create!(name: 'Tango')
ballet = Topic.create!(name: 'Ballet')
whatever = Topic.create!(name: 'Whatever')
#art
painting = Topic.create!(name: 'Painting')
canvas = Topic.create!(name: 'Canvas')
photography = Topic.create!(name: 'Photography')
cculpture = Topic.create!(name: 'Sculpture')



# s1 = Course.create!(
#     title: 'Wonder of Clouds',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Academy of Science"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u1.id,
#     category_id: science.id,
#     topic_id: nebulae.id,
# )

# s2 = Course.create!(
#     title: 'Explore Galaxies',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Academy of Science"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u1.id,
#     category_id: science.id,
#     topic_id: galaxies.id,
# )

# s3 = Course.create!(
#     title: 'Astrobiology',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: false,
#     location: '{"city": "San Francisco", "venue": "Academy of Science"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u3.id,
#     category_id: science.id,
#     topic_id: astrobiology.id,
# )
# s4 = Course.create!(
#     title: 'Cosmology',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Academy of Science"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u2.id,
#     category_id: science.id,
#     topic_id: cosmology.id,
# )

# t1 = Course.create!(
#     title: 'Advance Redux',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "App Academy"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u2.id,
#     category_id: tech.id,
#     topic_id: redux.id,
# )

# t2 = Course.create!(
#     title: 'Algorithms in JS',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "App Academy"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u1.id,
#     category_id: tech.id,
#     topic_id: redux.id,
# )

# t3 = Course.create!(
#     title: 'Ruby on Rails',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: false,
#     location: '{"city": "San Francisco", "venue": "App Academy"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u3.id,
#     category_id: tech.id,
#     topic_id: ruby.id,
# )
# t4 = Course.create!(
#     title: 'D3',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "App Academy"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u3.id,
#     category_id: tech.id,
#     topic_id: d3.id,
# )

# m1 = Course.create!(
#     title: 'Electric Guitar',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Music Conservatory"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u4.id,
#     category_id: music.id,
#     topic_id: guitar.id,
# )

# m2 = Course.create!(
#     title: 'Flute Lessons',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: false,
#     location: '{"city": "San Francisco", "venue": "Music Conservatory"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u3.id,
#     category_id: music.id,
#     topic_id: flute.id,
# )
# m3 = Course.create!(
#     title: 'Piannnoo',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Music Conservatory"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u1.id,
#     category_id: music.id,
#     topic_id: piano.id,
# )
# m1 = Course.create!(
#     title: 'Violin',
#     description: 'Excepteur sint occaecat cupidatat non proident, sunt in',
#     end_date: etime,
#     start_date: stime,
#     is_popular: true,
#     location: '{"city": "San Francisco", "venue": "Music Conservatory"}',
#     requirements: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
#     size: 10,
#     about_creator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
#     creator_id: u3.id,
#     category_id: music.id,
#     topic_id: violin.id,
# )
