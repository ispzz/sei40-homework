class CreateWastes < ActiveRecord::Migration[5.2]
  def change
    create_table :wastes do |t|
      t.text :name
      t.text :landfill_weight_PA
      t.text :image

      t.timestamps
    end
  end
end
