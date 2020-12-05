class Teacher < ApplicationRecord
  belongs_to :grade
  has_many :students
  belongs_to :user, optional: true
end
