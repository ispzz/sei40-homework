# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


City.destroy_all # Clear the database table first

City.create!(
  name: 'São Paulo',
  population: 12,
  best_food: 'Pastel',
  image_url: 'https://www.guiadasemana.com.br/contentFiles/image/2019/02/FEA/galeria/44210_w840h525_1551362497shutterstock-1106375723.jpg',
  must_see: 'Avenida Paulista',
  image_url_see: 'https://mk0travelawayrru2xew.kinstacdn.com/wp-content/uploads/2018/06/paulista-avenue-sao-paulo.jpg'
)

City.create!(
  name: 'Rio de Janeiro',
  population: 6,
  best_food: 'Picadinho de carne',
  image_url: 'https://ibis.accor.com/editorial/imagerie/article/comidas-tipicas-do-rio-de-janeiro-picadinho-de-carne-ce91_660x440.jpg',
  must_see: 'Cristo Redentor',
  image_url_see: 'http://visit.rio/wp-content/uploads/2015/09/6009020497_2e3b557e05_b-1024x678.jpg'
)

City.create!(
  name: 'Manaus',
  population: 1,
  best_food: 'Tacaca',
  image_url: 'https://cdn.tasteatlas.com//images/dishes/24b895a2329349f2b9beb0b9b41fb791.jpg?width=660&height=420',
  must_see: 'Rio Negro River',
  image_url_see: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/ad/e4/8d.jpg'
)
