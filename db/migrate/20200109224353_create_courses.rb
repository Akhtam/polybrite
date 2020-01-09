class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :requirements, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :size, null: false
      t.boolean :is_popular, default: false
      t.string :about_creator, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :courses, :title
    add_index :courses, :location
    add_index :courses, :creator_id
    add_index :courses, :category_id
    add_index :courses, :topic_id
  end
end
