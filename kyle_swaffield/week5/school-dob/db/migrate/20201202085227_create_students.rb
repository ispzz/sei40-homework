class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.text :name
      t.text :image
      t.integer :grade_id
      t.date :dob
      t.integer :teacher_id

      t.timestamps
    end
  end
end
