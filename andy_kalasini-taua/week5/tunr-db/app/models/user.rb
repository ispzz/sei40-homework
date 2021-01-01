class User < ApplicationRecord
  has_many :mixtapes

# use the bcrypt gem to encrypt passwords when users create accounts, and tore only the encrypted version in the 'users' table
  has_secure_password
end
