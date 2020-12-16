class CreateBackends < ActiveRecord::Migration[5.2]
  def change
    create_table :backends do |t|
      t.text :name
      t.integer :date_released
      t.text :logo

      t.timestamps
    end
  end
end
