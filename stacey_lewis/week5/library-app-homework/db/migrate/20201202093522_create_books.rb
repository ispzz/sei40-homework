class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.integer :year
      t.text :author
      t.text :description

      t.timestamps
    end
  end
end
