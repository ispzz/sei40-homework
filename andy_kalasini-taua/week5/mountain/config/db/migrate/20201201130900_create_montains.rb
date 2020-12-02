class CreateMontains < ActiveRecord::Migration[5.2]
  def change

    create_table :montains do |t|

      t.string :name
      t.text :image_url
      t.text :location
      t.text :first_ascenders
      t.integer :mountain_range

    end
  end
end
