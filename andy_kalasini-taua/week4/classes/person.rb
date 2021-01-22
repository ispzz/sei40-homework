
require 'pry'


class Person

  def initialize( name, age )
    puts "Making a new Person called #{ name }"
    @name = name
    @age = age
  end

   def hello
     puts "Hello there! My name is #{ @name } and I am #{ @age } years old"
   end

   def goodbye
     puts "It was great to meet you!"
   end

end


binding.pry
