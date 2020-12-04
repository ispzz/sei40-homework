# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Grade.destroy_all

puts "Create Grades"
r24 = Grade.create!(
  name: "R24",
  image: "https://www.wsls.com/resizer/imVf1vy3XezKk1ohgPN6uHNyjyI=/1600x1003/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/KPNKQ5IIVZB6PN62UROKXZQFBM.jpg"
)
d63 = Grade.create!(
  name: "D63",
  image: "https://d1vhqlrjc8h82r.cloudfront.net/05-19-2020/t_eeaf87b9532a419487d7e8381a063d3e_name_image.jpg"
)
t76 = Grade.create!(
  name: "T76",
  image: "https://images.glaciermedia.ca/polopoly_fs/1.24151654.1592002860!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/class-photo.jpg"
)

puts "Done! Created #{Grade.count} grades:"
puts Grade.pluck(:name).join(', ')

Teacher.destroy_all
puts "Create teachers"
dianne = Teacher.create!(
  name: 'Dianne Thomas',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1984-07-12',
  grade_id: r24.id
)
john = Teacher.create!(
  name: 'John Thomas',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1999-02-20',
  grade_id: r24.id
)
simmone = Teacher.create!(
  name: 'Simmone Wells',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1989-08-20',
  grade_id: d63.id
)
tom= Teacher.create!(
  name: 'Tom Kitten',
  image: 'http://www.fillmurray.com/100/100',
  dob: '2000-04-15',
  grade_id: d63.id
)
megan = Teacher.create!(
  name: 'Megan Frost',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1994-04-01',
  grade_id: t76.id
)
johan = Teacher.create!(
  name: 'Johan van Dyk',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id
)

puts "Done! Created #{Teacher.count} teachers:"
puts Teacher.pluck(:name).join(', ')

Student.destroy_all
puts "Create Students"

Student.create!(
  name: 'Alistair Potgieter',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: johan.id
)
Student.create!(
  name: 'Ryan Chapman',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: megan.id
)
Student.create!(
  name: 'Donovan Mills',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: tom.id
)
Student.create!(
  name: 'Nolan Mills',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: simmone.id
)

Student.create!(
  name: 'Timiell Frost',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: johan.id
)
Student.create!(
  name: 'Sasha Brown',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: megan.id
)
Student.create!(
  name: 'Matthew Conway',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: tom.id
)
Student.create!(
  name: 'Collin Du Toit',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: simmone.id
)

Student.create!(
  name: 'Dirk Walters',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: johan.id
)
Student.create!(
  name: 'John Walker',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: megan.id
)
Student.create!(
  name: 'Simon Metcalf',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: tom.id
)
Student.create!(
  name: 'Gabby West',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: simmone.id
)

Student.create!(
  name: 'Tim Smit',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: johan.id
)
Student.create!(
  name: 'Jordan Marsh',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: t76.id,
  teacher_id: megan.id
)
Student.create!(
  name: 'David Helena',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: tom.id
)
Student.create!(
  name: 'Peter Lester',
  image: 'http://www.fillmurray.com/100/100',
  dob: '1992-04-25',
  grade_id: d63.id,
  teacher_id: simmone.id
)

puts "Done! Created #{Student.count} students:"
puts Student.pluck(:name).join(', ')

User.destroy_all
t1 = User.create!(
  name: 'Dianne Thomas',
  email: 'dianne@thomas.co',
  password: 'chicken'
)
t2 = User.create!(
  name: 'John Thomas',
  email: 'john@thomas.co',
  password: 'chicken'
)
t3 = User.create!(
  name: 'Simmone Wells',
  email: 'simmonen@wells.co',
  password: 'chicken'
)
t4 = User.create!(
  name: 'Tom Kitten',
  email: 'tom@kitten.co',
  password: 'chicken'
)
t5 = User.create!(
  name: 'Megan Frost',
  email: 'megan@frost.co',
  password: 'chicken'
)
t6 = User.create!(
  name: 'Johan van Dyk',
  email: 'johan@johan.co',
  password: 'chicken'
)

t1.teachers << dianne
t2.teachers << john
t3.teachers << simmone
t4.teachers << tom
t5.teachers << megan
t6.teachers << johan
