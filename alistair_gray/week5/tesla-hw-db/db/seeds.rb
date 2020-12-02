# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Reset Table
Car.destroy_all

# Model S
Car.create!(
  name: 'Model S',
  image_url: 'models.jpg',
  self_driving: 1,
  range: 772,
  starting_price: 119990
)

# Model 3
Car.create!(
  name: 'Model 3',
  image_url: 'model3.jpg',
  self_driving: 1,
  range: 657,
  starting_price: 66900
)

# Model X
Car.create!(
  name: 'Model X',
  image_url: 'modelx.jpg',
  self_driving: 1,
  range: 633,
  starting_price: 138990
)
