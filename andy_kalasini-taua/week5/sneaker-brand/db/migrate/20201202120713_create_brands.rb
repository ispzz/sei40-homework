class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.string :name
      t.text :shoe_type
      t.text :origination
      t.text :influencer
      t.text :bio
      t.integer :price #This will need to be changed to text????
      t.text :image

      t.timestamps
    end
  end
end
