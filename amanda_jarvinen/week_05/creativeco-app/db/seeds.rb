# CODERS
Coder.destroy_all # start with clean slate

puts "Create Coders..."

mattdesl = Coder.create!(
    name: 'Matt Deslauriers',
    nationality: 'Canadian',
    portfolio_url: 'https://www.matdesl.com',
    instagram_url: 'https://www.instagram.com/mattdesl_art/',
    image_url: 'mattdesl.jpg',
    bio: 'Generative artist and creative coder who created canvas-sketch, a framework for developing Generative Art with JavaScript'
)

puts "Done! Created #{Coder.count} works:"
puts Coder.pluck(:name).join(', ')



# CREATIONS
Creation.destroy_all # start with clean slate

puts "Create Creations..."

Creation.create!(
    title: 'Color-Wander',
    medium: 'Open-source generative artowrk in Node.js and the browser',
    image_url: 'color-wander.jpg',
    coder_id: mattdesl.id
)

puts "Done! Created #{Creation.count} works:"
puts Creation.pluck(:title).join(', ')
