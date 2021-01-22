puts "Creating Brands..."

Brand.destroy_all

Brand.create!(
  name: 'Nike',
  shoe_type: 'Air force ones',
  origination: 'New York',
  influencer: 'Jay.Z',
  bio: 'The Air Force 1 (or AF1 or AF-1) was never originally called the Air Force. Bruce Kilgore designed the shoe.',
  price: '100',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6-nike-1583529963.png?crop=1xw:1xh;center,top&resize=480:*'
)

Brand.create!(
  name: 'Jordans',
  shoe_type: 'Air Jordans',
  origination: 'USA',
  influencer: 'Michael Jordan',
  bio: 'Though the Jordan Brand is technically a separate subdivision owned by Nike, its enough of a force in the sneaker game that it warrants its own mention.',
  price: '35,000',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4-jordan-1583529919.png?crop=1xw:1xh;center,top&resize=480:*'
)

Brand.create!(
  name: 'Converse',
  shoe_type: 'Chucks',
  origination: 'USA',
  influencer: 'Michelle Obama',
  bio: 'Converse was founded over a century ago as one of the first producers of "athletic shoes" in the country.',
  price: '120',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2-con-1583529876.png?crop=1xw:1xh;center,top&resize=480:*'
)

Brand.create!(
  name: 'Adidas',
  shoe_type: 'NMD R1s',
  origination: 'GERMANY',
  influencer: 'Posh Spice',
  bio: 'For years, Adidas played second fiddle to Nike when it came to running (ha!) the global sneaker market, but the brand founded by Adolf Dassler in a small town in Germany has been making serious inroads in chipping away at Nikes dominance',
  price: '200',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-adi-1583529851.png?crop=1xw:1xh;center,top&resize=480:*'
)

Brand.create!(
  name: 'Puma',
  shoe_type: 'Smash Suede',
  origination: 'GERMANY',
  influencer: 'The Weekend',
  bio: 'There must be something in the water in that small German town, because after a falling out with his brother Adolf, Rudolf Dassler took it upon himself to start his own sneaker brand and in 1948 founded Puma (and you think your relationship with your siblings is tense?).',
  price: '48',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/10-puma-1583775725.png?crop=1xw:1xh;center,top&resize=480:*'
)

puts "Done! Created #{ Brand.count } brands:"
puts Brand.pluck(:name).join(', ')
