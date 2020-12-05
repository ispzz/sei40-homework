# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

puts "Creating Wastes..."

Waste.destroy_all  # delete every row in the 'wastes' table before we start

textile = Waste.create!(
  name: 'Textiles',
  landfill_weight_PA: '500 million kilograms', #Amount put into landfills every year in Australia
  image:'https://i.guim.co.uk/img/media/b96fba1cf27f712298e3e6c86bd14cd47fd0083a/531_4_3173_1904/master/3173.jpg?width=620&quality=85&auto=format&fit=max&s=4712d035daf02cf46eaa1cadb713cf24'
)

food = Waste.create!(
  name: 'Food Waste',
  landfill_weight_PA: '7.3 million tonnes', #Amount put into landfills every year in Australia
  image: 'https://www.insidewaste.com.au/wp-content/uploads/2019/01/food-waste.jpg'
)

puts "Done! Created #{ Waste.count } wastes:"
puts Waste.pluck(:name).join(', ')

# solutions seeds ################################

puts "Creating solutions..."

Solution.destroy_all  # avoid duplicates when re-running seed file

Solution.create!(
  action: 'Reduce, reuse and recycle',
  summary: 'Want to take the first step in becoming a more conscious shopper? Reduce, reuse and recycle your clothes the right way. From buying quality pieces to renting your next occasion outfit or learning how to sew, check out the link for tips on how you can start taking action today.',
  image: 'http://www.tate.org.uk/art/images/solution/T/T03/T03291_10.jpg',
  links: 'https://www.cleanup.org.au/top-10-ways-to-reuse-reduce-and-recycle-your-clothes',
  waste_id: textile.id
)


puts "Done! Created #{ solution.count } solutions:"
puts Solution.pluck(:action).join(', ')
