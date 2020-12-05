class CreateCities < ActiveRecord::Migration[5.2]
  def change




    create_table :cities do |t|

      t.string :name
      t.integer :population
      t.text :best_food
      t.text :image_url
      t.text :must_see
      t.text :image_url_see

    end # table cities






  end # change




end # class
