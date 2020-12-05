# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Use .create! because it fails loudly when it can't create
# an item for you - this helps us debug our seeds

Coogan.destroy_all   # Clear the database table first

Coogan.create!(
  title: 'Im Alan Partridge',
  image_url: 'https://m.media-amazon.com/images/MMV5BODRmYzYzZjItMzNmYy00NGE5LTk0MjctYWJkOGNlOWM2MWM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  format:  'tv show',
  year:  '1997'
)




puts "Done! Created #{ Coogan.count } coogans."
puts Coogan.pluck(:title).join(', ')
