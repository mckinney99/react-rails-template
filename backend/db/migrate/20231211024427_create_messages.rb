class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.datetime :datetime
      t.string :sender_email
      t.string :subject
      t.text :body

      t.timestamps
    end
  end
end
