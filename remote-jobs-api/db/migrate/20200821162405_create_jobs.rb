class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :url
      t.string :company
      t.string :date
      t.string :position
      t.string :description

      t.timestamps
    end
  end
end
