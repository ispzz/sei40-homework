class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string  :name
      t.text    :image_url
      t.boolean :self_driving
      t.integer :range
      t.integer :starting_price
    end # create_table()
  end # change
end # CreateCars
