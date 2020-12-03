class Waste < ApplicationRecord
  has_many :solutions
  # ^ go to the 'solutions' table and use [current class name plural]_id
  # to find the matching IDs for this Waste issue
end
