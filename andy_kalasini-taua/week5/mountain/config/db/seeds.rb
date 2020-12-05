# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.create!(
  name:'Mount Everest',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/auto-Everest_kalapatthar.jpg',
  location: 'Solukhumbu District',
  first_ascenders: 'Edmund Hillary',
  mountain_range: 'Himalayas',
  elevation: '8,848'
)

puts "Done! Created #{ Mountain.count }."
puts Mountain.pluck(:name).join(', ')
