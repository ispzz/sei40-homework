class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.text :name
      t.text :address
      t.text :city
      t.integer :postcode
      t.text :opening_hours
      t.text :logo

      t.timestamps
    end
  end
end
