class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :owner, null: false, foreign_key: true
      t.belongs_to :playdate, null: false, foreign_key: true
      t.string :text

      t.timestamps
    end
  end
end
