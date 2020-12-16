puts 'Creating Frontends...'

Frontend.destroy_all

angular = Frontend.create!(
  name: 'Angular',
  date_released: 2010,
  logo: 'angular.png'
)

react = Frontend.create!(
  name: 'React',
  date_released: 2013,
  logo: 'react.png'
)

vue = Frontend.create!(
  name: 'Vue',
  date_released: 2014,
  logo: 'vue.png'
)

puts "Done! Created #{Frontend.count} frontends:"
puts Frontend.pluck(:name).join(', ')


puts 'Creating Backends...'

Backend.destroy_all

node = Backend.create!(
  name: 'Node',
  date_released: 2009,
  logo: 'nodejs.png'
)

scala = Backend.create!(
  name: 'Scala',
  date_released: 2004,
  logo: 'scala.png'
)

java = Backend.create!(
  name: 'Java',
  date_released: 1996,
  logo: 'java.png'
)

ror = Backend.create!(
  name: 'Ruby on Rails',
  date_released: 2004,
  logo: 'ror.png'
)

php = Backend.create!(
  name: 'PHP',
  date_released: 1998,
  logo: 'php.png'
)

puts "Done! Created #{Backend.count} backends:"
puts Backend.pluck(:name).join(', ')

puts 'Creating Websites...'

Website.destroy_all

Website.create!(
  name: 'Paypal',
  frontend_id: angular.id,
  backend_id: node.id,
  launched: 1998,
  hacked: false,
  domain: 'paypal.com',
  owned_by: 'Public',
  wiki: 'https://en.wikipedia.org/wiki/PayPal'
)

Website.create!(
  name: 'The Guardian',
  frontend_id: angular.id,
  backend_id: scala.id,
  launched: 1999,
  hacked: false,
  domain: 'theguardian.com',
  owned_by: 'Scott Trust Limited',
  wiki: 'https://en.wikipedia.org/wiki/The_Guardian'
)

Website.create!(
  name: 'Netflix',
  frontend_id: react.id,
  backend_id: java.id,
  launched: 1999,
  hacked: true,
  domain: 'netflix.com',
  owned_by: 'Public',
  wiki: 'https://en.wikipedia.org/wiki/Netflix'
)

Website.create!(
  name: 'Airbnb',
  frontend_id: react.id,
  backend_id: ror.id,
  launched: 2008,
  hacked: false,
  domain: 'airbnb.com',
  owned_by: 'Multiple private - filed for IPO',
  wiki: 'https://en.wikipedia.org/wiki/Airbnb'
)

Website.create!(
  name: 'Nintendo',
  frontend_id: vue.id,
  backend_id: node.id,
  launched: 1990,
  hacked: true,
  domain: 'nintendo.com',
  owned_by: 'Public',
  wiki: 'https://en.wikipedia.org/wiki/Nintendo'
)

Website.create!(
  name: 'Font Awesome',
  frontend_id: vue.id,
  backend_id: php.id,
  launched: 2012,
  hacked: false,
  domain: 'fontawesome.com',
  owned_by: 'Open Source - Created by Dave Gandy',
  wiki: 'https://en.wikipedia.org/wiki/Font_Awesome'
)
