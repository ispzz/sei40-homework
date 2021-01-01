class Work < ApplicationRecord
  belongs_to :artist #Mandatory unless you add' , optional: true' use
end
