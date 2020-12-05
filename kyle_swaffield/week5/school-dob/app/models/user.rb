class User < ApplicationRecord
  has_many :teachers
  belongs_to :student, optional: true
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :name, length: {minimum:2}
end
