class CreateProbes < ActiveRecord::Migration[5.2]
  def change
    create_table :probes do |t|
      t.string :name
      t.integer :year_launched
      t.string :mission
      t.boolean :mission_outcome
      t.boolean :probe_status
      t.string :country
      t.string :image
    end
  end
end
