require 'pry'

# Classes are always capitalised camelcase in Ruby

class Person

  # Shortcut for writting a getter + setter for an instance variable:
  attr_accessor :age, :height

  # This is a class method - you call it directly on teh class itself,
  # not on an object instance of the class

  def self.describe
    puts "This is a class for creating people and also apparently breeding them"
  end

  # Create a method which will expose the hidden instance variable @name
  # to any code outside of this class which is working with an instance
  # of this class (an object made with Person.new)
  # i.e. this gets the value for us, it's a GETTER
  def name
    @name # implicit return
  end

  # Define a SETTER: a method that lets us change what's in this instance
  # variable, from outside this class (i.e when working with an object)
  def name=(val)
    @name = val
  end # name()

  #This is called the constructor function
  # if we define it in our class, this is the method
  # that actually gets called when you run 'Person.new'
  def initialize(name, age)
    puts "Making a new person called #{name}, and they are #{age} years old"

    # save the argument into an instance variable
    # so we can use this data in all the methods
    # of this class - it becomes "global" within
    # the object (but each new object will have
    # a unique version of this variable)
    @name = name
    @age = age

  end # initialize()

  def hello
    puts "Hello there! My name is #{@name} and I am #{@age} years old"
  end # hello()

  def goodbye
    puts "It was great to meet you!"
  end # goodbye()

end # Person

# Inheritance!
# Let's make a new, more specific type of Person
# called a Comedian
# They will inherit most of their data and behaviour
# (methods) from the "parent" class, person
# But they might add some specific behaviour of their own


# 'CLASSES ARE CLOSED FOR MODIFICATION
# BUT OPEN FOR EXTENSION' .. via Inheritance
class Comedian < Person

  def initialize(name)
    super name, 20 #hardcode the age as 20 for each Comedian
    puts "Making a Comedian"
  end # initialize()

  def tell_joke
    puts "What's brown and sticky?"
    5.times do
      puts '.'
      sleep 0.2
      end
      puts "a stick!"
    end # tell_joke

  # Re-define ('override') a method that this class inherited from its parent class
  def hello
    super # Run the version of 'hello' that is defined in the parent class,
    # Person. and then add some custom behaviour as detailed below
    puts "Please watch my Netflix special and come to my shows"
  end

end # Comedian


binding.pry
