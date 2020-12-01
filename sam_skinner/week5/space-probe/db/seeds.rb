# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Probe.destroy_all

Probe.create!(
  name: 'Sputnik I',
  year_launched: 1957,
  mission: 'Technology demonstration - orbit earth',
  mission_outcome: true,
  probe_status: false,
  country: 'Soviet Union',
  image: 'sputnik.jpg'
)

Probe.create!(
  name: 'Voyager 1',
  year_launched: 1977,
  mission: 'Primary - Exploration of Jupiter & Saturn\nExtended - Explore outermost edges of Sun\'s domain & beyond',
  mission_outcome: true,
  probe_status: true,
  country: 'USA',
  image: 'voyager.png'
)

Probe.create!(
  name: 'New Horizons',
  year_launched: 2006,
  mission: 'Primary - Perform flyby study of Pluto\nSecondary - Flyby and study Kuiper Belt Objects',
  mission_outcome: true,
  probe_status: true,
  country: 'USA',
  image: 'newhorizons.png'
)

Probe.create!(
  name: 'Mars Climate Orbiter',
  year_launched: 1998,
  mission: 'Study Martian climate, atmosphere and surface changes',
  mission_outcome: false,
  probe_status: false,
  country: 'USA',
  image: 'mco.jpg'
)
