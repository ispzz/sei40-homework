class CreateCreations < ActiveRecord::Migration[5.2]
  def change
    create_table :creations do |t|
      t.text :title
      t.string :medium
      t.text :image_url
      t.integer :coder_id

      t.timestamps
    end
  end
end
