class CreateNovels < ActiveRecord::Migration[5.2]
  def change
    create_table :novels do |t|
      t.text :title
      t.integer :year
      t.text :author
      t.text :description
      t.integer :library_id

      t.timestamps
    end
  end
end
