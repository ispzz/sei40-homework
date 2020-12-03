# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all

Book.create!(
    title: 'Magician',
    author: 'Raymond E Feist',
    description: 'In the westernmost province of the Kingdom of the Isles, upon the world of Midkemia, an orphan kitchen boy named Pug was made apprentice to the magician Kulgan. Here starts an adventure that will span lifetimes and worlds. Discover where the story begins.',
    image_url: 'magician.jpg'
)

Book.create!(
    title: 'The Moon is a Harsh Mistress',
    author: 'Robert A. Heinlein',
    description: "In 2075, the Moon is no longer a penal colony. But it is still a prison...  Life isn't easy for the political dissidents and convicts who live in the scattered colonies that make up lunar civilisation. Everything is regulated strictly, efficiently and cheaply by a central supercomputer, HOLMES IV.
    
    When humble technician Mannie O'Kelly-Davis discovers that HOLMES IV has quietly achieved consciousness (and developed a sense of humour), the choice is clear: either report the problem to the authorities... or become friends.
    
    And perhaps overthrow the government while they're at it.",
    image_url: 'moonharshmistress.jpg'
)

Book.create!(
    title: 'The Time Machine',
    author: 'H. G. Wells',
    description: "So begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era",
    image_url: 'timemachine.jpg'
)