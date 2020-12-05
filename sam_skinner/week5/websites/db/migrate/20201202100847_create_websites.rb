class CreateWebsites < ActiveRecord::Migration[5.2]
  def change
    create_table :websites do |t|
      t.text :name
      t.integer :frontend_id
      t.integer :backend_id
      t.integer :launched
      t.boolean :hacked
      t.text :domain
      t.text :owned_by
      t.text :wiki

      t.timestamps
    end
  end
end
