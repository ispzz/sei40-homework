class CreateVegetables < ActiveRecord::Migration[5.2]
  def change
    create_table :vegetables do |t|

      t.string  :name
      t.string  :scientific_name
      t.string  :harvest_time
      t.integer :height
      t.integer :spacing


    end #end do
  end #change
end #CreateVegetables
