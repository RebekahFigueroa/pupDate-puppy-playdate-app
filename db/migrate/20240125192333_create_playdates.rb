class CreatePlaydates < ActiveRecord::Migration[6.1]
  def change
    create_table :playdates do |t|
      t.references :owner_id, null: false, foreign_key: true
      t.string :location
      t.timestamp :time
      t.timestamp :date
      t.string :size_limit
      t.string :age_limit
      t.integer :playdate_size_limit

      t.timestamps
    end
  end
end
