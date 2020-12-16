# CODERS
Coder.destroy_all # start with clean slate

puts "Create Coders..."

freeke = Coder.create!(
    name: 'Saskia Freeke',
    nationality: 'Netherlander',
    portfolio_url: 'https://sasj.nl/portfolio/',
    instagram_url: 'https://www.instagram.com/sasj_nl/',
    image_url: 'freeke.jpg',
    bio: 'Artist, creative coder, interaction design and educator, Saskia focuses on structure, geometry and playfulness.'
)

mattdesl = Coder.create!(
    name: 'Matt Deslauriers',
    nationality: 'Canadian',
    portfolio_url: 'https://www.matdesl.com',
    instagram_url: 'https://www.instagram.com/mattdesl_art/',
    image_url: 'mattdesl.jpg',
    bio: 'Generative artist and creative coder who created canvas-sketch, a framework for developing Generative Art with JavaScript'
)

hobbes = Coder.create!(
    name: 'Tyler Hobbes',
    nationality: 'American',
    portfolio_url: 'https://tylerxhobbs.com/',
    instagram_url: 'https://www.instagram.com/tylerxhobbs/',
    image_url: 'Hobbes.jpg',
    bio: 'Generative artist focused on the interplay of randomness and order. He draws inspiration from paint, vegetation and naturally occuring patterns'
)

puts "Done! Created #{Coder.count} works:"
puts Coder.pluck(:name).join(', ')



# CREATIONS
Creation.destroy_all # start with clean slate

puts "Create Creations..."

Creation.create!(
    title: 'Color-Wander',
    medium: 'Open-source generative artowrk in Node.js and the browser',
    image_url: 'color-wander.png',
    coder_id: mattdesl.id
)

Creation.create!(
    title: 'Mozilla GDC 2016',
    medium: 'WebGL2 tech demo',
    image_url: 'mozillagdc.png',
    coder_id: mattdesl.id
)

Creation.create!(
    title: 'Comfort in Red and Blue',
    medium: 'Pen and Ink on Paper',
    image_url: 'comfort_in_red_and_blue.jpg',
    coder_id: hobbes.id
)

Creation.create!(
    title: 'Blended Extensity 0',
    medium: 'Ink on Paper',
    image_url: 'BlendedExtensity.jpg',
    coder_id: freeke.id
)

Creation.create!(
    title: 'Geometric Galaxy Voyage',
    medium: 'Video',
    image_url: 'geometricgalaxyvoyage.png',
    coder_id: freeke.id
)

puts "Done! Created #{Creation.count} works:"
puts Creation.pluck(:title).join(', ')
