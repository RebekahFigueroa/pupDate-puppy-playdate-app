class CreateRsvps < ActiveRecord::Migration[6.1]
  def change
    create_table :rsvps, id: false do |t|
      t.references :dog_id, null: false, foreign_key: true
      t.references :playdate_id, null: false, foreign_key: true
      t.string :note

      t.timestamps
    end

    add_index :rsvps, [:dog_id, :playdate_id], unique: true
  end
end
