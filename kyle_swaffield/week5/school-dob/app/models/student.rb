class Student < ApplicationRecord
  belongs_to :grade
  belongs_to :teacher
  belongs_to :user, optional: true
end
