class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :owner_id, null: false, foreign_key: true
      t.references :playdate_id, null: false, foreign_key: true
      t.string :text

      t.timestamps
    end
  end
end
