require 'pry'

days_of_the_week = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]

p days_of_the_week

days_of_the_week.delete('sunday')
days_of_the_week.unshift('sunday')

p days_of_the_week

binding.pry

# days_of_the_week.each do |day|
  # weekend  = []
  # weekdays = []
  # if
  #   day == 'saturday' || day == 'sunday'
  #   weekend.push(day)
  # else
  #   weekdays.push(day)
  # end
  # p weekend
  # p weekday
# end
