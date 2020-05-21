class CreateWishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.integer :course_id, null: false
      t.integer :student_id, null:false
      t.timestamps
    end
      add_index :wishlists, :course_id
      add_index :wishlists, :student_id
  end
end
