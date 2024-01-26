class CreateRsvps < ActiveRecord::Migration[6.1]
  def change
    create_table :rsvps, id: false do |t|
      t.belongs_to :dog, null: false, foreign_key: true
      t.belongs_to :playdate, null: false, foreign_key: true
      t.string :note

      t.timestamps
    end

    add_index :rsvps, [:dog_id, :playdate_id], unique: true
  end
end
