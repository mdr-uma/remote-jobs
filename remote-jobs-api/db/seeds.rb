# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "Uma", email: "uma@gmail.com", password: "password")
User.create(username: "Collin", email: "collin@gmail.com", password: "password")

Job.create(url: "url", date: "date", company: "lkajsf", position:"frontend_developer", description: ";lakjsf")
Job.create(url: "url2", date: "date", company: "lkajsf", position:"frontend_developer", description: ";lakjsf")
