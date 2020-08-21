# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "uma@gmail.com", password: "password")
User.create(email: "collin@gmail.com", password: "password")

Job.create(url: "url", title: "title", company_name: "lkajsf", job_type: "lakjsf", candidate_required_location: "lkajsf", salary: "lkajsdf", description: ";lakjsf")
Job.create(url: "url2", title: "title", company_name: "lkajsf", job_type: "lakjsf", candidate_required_location: "lkajsf", salary: "lkajsdf", description: ";lakjsf")
