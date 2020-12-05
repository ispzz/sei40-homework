class Website < ApplicationRecord
  belongs_to :frontend
  belongs_to :backend
end
