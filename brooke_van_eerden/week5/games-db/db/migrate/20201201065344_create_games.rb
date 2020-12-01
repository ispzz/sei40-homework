class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.string :platform
      t.string :description
      t.integer :max_players
      t.text :box_art
    end
  end
end
