class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.text :name
      t.text :image
      t.integer :grade_id
      t.date :dob

      t.timestamps
    end
  end
end
