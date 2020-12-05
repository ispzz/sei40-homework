class CreateCoders < ActiveRecord::Migration[5.2]
  def change
    create_table :coders do |t|
      t.text :name
      t.text :nationality
      t.text :portfolio_url
      t.text :instagram_url
      t.text :image_url

      t.timestamps
    end
  end
end
