class CreateEnrolls < ActiveRecord::Migration[5.2]
  def change
    create_table :enrolls do |t|

      t.timestamps
    end
  end
end
