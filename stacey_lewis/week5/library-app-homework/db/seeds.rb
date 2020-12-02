# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


Library.destroy_all

puts "Clearing table..."

puts "Adding libraries to table... "


melbourne = Library.create!(
  name: "Melbourne City Library",
  address: "107 Victoria Harbour Promenade",
  city: "Docklands",
  postcode: 3008,
  opening_hours: "8am-7pm Daily",
  logo: "https://librarysearch.melbourne.vic.gov.au/docs/WPAC/images/CoM_logo_Libraries_Header_Desktop.png"
)

malvern= Library.create!(
  name: "Malvern Library",
  address: "1255 High Street",
  city: "Malvern",
  postcode: 3144,
  opening_hours: "10am-5pm Monday-Friday",
  logo: "https://www.stonnington.vic.gov.au/files/sharedassets/library/news/slis-and-cos-logo.jpg?dimension=pageimage&w=480"
)

hamilton = Library.create!(
  name: "Greater Hamilton Library",
  address: "105 Brown Street",
  city: "Hamilton",
  postcode: 3300,
  opening_hours: "10am-4pm Monday-Friday",
  logo: "https://www.sthgrampians.vic.gov.au/Page/Images/SGSC-logo.png"
)


puts "Created #{Library.count} libraries"
puts "They are #{Library.pluck(:name)}"

#***************************************************************

Novel.destroy_all

puts "Clearing table..."

puts "Adding novels to table... "


Novel.create!(
  title: "To Kill A Mockingbird",
  year: 1960,
  author: "Harper Lee",
  description: "A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel—a black man charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with rich humor and unswerving honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence, and hypocrisy is pricked by the stamina and quiet heroism of one man's struggle for justice—but the weight of history will only tolerate so much.",
  library_id: melbourne.id
)

Novel.create!(
  title: "Emma",
  year: 1815,
  author: "Jane Austen",
  description: "Beautiful, clever, rich – and single Emma Woodhouse is perfectly content with her life and sees no need for either love or marriage. Nothing, however, delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend Mr Knightley and attempts to arrange a suitable match for her protigie Harriet Smith, her carefully laid plans soon unravel and have consequences that she never expected. With its imperfect but charming heroine and its witty and subtle exploration of relationships, Emma is often seen as Jane Austin's most flawless work.",
  library_id: malvern.id
)

Novel.create!(
  title: "Nineteen Eighty-Four",
  year: 1960,
  author: "George Orwell",
  description: "'It was a bright cold day in April, and the clocks were striking thriteen.' Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101... Nineteen Eight-Four is George Orwell's terrifying vision of a totalitarian future in which everything and everyone is slave to a tyrannical regime. 'More relevant to today than almost any other book that you can think of.' - Jo Brand 'Right up there among my favourite books. . . I read it again and again.' - Margaret Atwood
",
  library_id: melbourne.id
)


puts "Created #{Novel.count} novels"
puts "They are #{Novel.pluck(:title)}"
