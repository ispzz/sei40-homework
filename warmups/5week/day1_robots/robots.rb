##############################################

# instructions for me, the human #
# create a robot name using 2 letters and 3 numbers
# - robot.name
# A method to reset the robot = generate a new robot name
#  - robot.reset
# a method to count every action on the robot
#  - robot.instruction_count
# a method to get the total age of the robot - " since last reset and since last creation"
# - robot.timers

###############################################

class Robot
    
    ## this is a setter & getter
    # attr_accessor :name
    ## it's the same as
    # def name=(val)
    #     @name = val
    # end

    # Create an intialize method that will be called whenever Robot.new is run
    # a .new method on a class will create an instance of that class then it will call the method intialize - this is why we create a method called initialize
    # the initialize method will set up any initial data or any instance variables we want when a robot is newly created (Robot.new)
    def initialize
        # since these are instance variables their scopes will be global to any other methods within the Robot class
        @name = name_generator
        @instruction_count = 0
        @time_created = Time.now
        @time_since_reset = Time.now
    end

    # getter - return the value of the name
    # a getter method allows us to get/read the name for that object (robot1.name)
    def name
        @instruction_count += 1
        # implicit return
        @name
    end

    # create robot name with 2 letters and 3 numbers - name_generator
    # instead of hardcoding an array of the alphabet we create a range
    # then turn that range into an array because .sample is an array-specific method
    def name_generator
        letters = ("A".."Z").to_a.sample(2).join
        numbers = (0..9).to_a.sample(3).join
        letters + numbers
    end

    # A method to reset the robot = generate a new robot name
    def reset
        @instruction_count += 1
        @time_since_reset = Time.now
        @name = name_generator
    end

    # instruction count - count every action run on the robot
    # getter - return the value of the counter when we run robot1.instruction_count
    def instruction_count
        @instruction_count
    end

    # a method to find the last time the robot was reset and last created
    def timers
        time_since_created = Time.now - @time_created
        time_since_last_reset = Time.now - @time_since_reset
        puts "Robot was created #{time_since_created} seconds ago and was reset #{time_since_last_reset} seconds ago"
    end

end

# Remember that when we call a .new method on a class, it will look for the initialize method
robot1 = Robot.new

puts "For some reason I want to know the robot's name 4 times"
puts robot1.name
puts robot1.name
puts robot1.name
puts robot1.name
sleep 2

puts "-" * 20
puts "Resetting robot ..."
puts "The new name of this robot is #{robot1.name}"
robot1.reset
sleep 2
robot1.timers
puts "-" * 20

puts "instruction count: #{robot1.instruction_count}"


