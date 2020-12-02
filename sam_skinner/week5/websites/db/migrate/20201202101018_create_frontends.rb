class CreateFrontends < ActiveRecord::Migration[5.2]
  def change
    create_table :frontends do |t|
      t.text :name
      t.integer :date_released
      t.text :logo

      t.timestamps
    end
  end
end
