class AddBioToCoders < ActiveRecord::Migration[5.2]
  def change
    add_column :coders, :bio, :text
  end
end
