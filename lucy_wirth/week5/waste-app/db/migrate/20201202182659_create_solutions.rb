class CreateSolutions < ActiveRecord::Migration[5.2]
  def change
    create_table :solutions do |t|
      t.text :action
      t.text :summary
      t.text :image
      t.text :links

      t.timestamps
    end
  end
end
