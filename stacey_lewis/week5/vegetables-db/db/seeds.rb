# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Vegetable.destroy_all


Vegetable.create!(
  name: 'Beetroot',
  scientific_name: 'Beta vulgaris',
  harvest_time: '8-12 weeks',
  height: 10,
  spacing: 30
)

Vegetable.create!(
  name: 'Asparagus',
  scientific_name: 'Asparagus officinalis',
  harvest_time: 'Ongoing from Spring',
  height: 100,
  spacing: 45
)

Vegetable.create!(
  name: 'Brocolli',
  scientific_name: 'Brassica oleracea',
  harvest_time: '6-14 weeks',
  height: 60,
  spacing: 50
)
