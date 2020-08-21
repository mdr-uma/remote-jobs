class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :url
      t.string :title
      t.string :company_name
      t.string :job_type
      t.string :candidate_required_location
      t.string :salary
      t.string :description

      t.timestamps
    end
  end
end
