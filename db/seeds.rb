# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!({
      email: 'dave@foo.com', 
      password: 'password',
      first_name: 'dave',
      last_name: 'grohl'
    })

    User.create!({
        email: 'pat@foo.com', 
        password: 'password',
        first_name: 'pat',
        last_name: 'smear'
    })

      User.create!({
        email: 'taylor@foo.com', 
        password: 'password',
        first_name: 'rip',
        last_name: 'taylor'
    })

      User.create!({
        email: 'pretentiousbilly@smashing.com', 
        password: 'password',
        first_name: 'billy',
        last_name: 'fullofhimself'
    })

      User.create!({
        email: 'paul@thefour.com', 
        password: 'password',
        first_name: 'paul',
        last_name: 'rathernotsay'
    })

      User.create!({
        email: 'angus@acdc.com', 
        password: 'password',
        first_name: 'angus',
        last_name: 'young'
    })

      User.create!({
        email: 'flea@rhcp.com', 
        password: 'password',
        first_name: 'flea',
        last_name: 'none'
    })

      User.create!({
        email: 'jimi@yahoo.com', 
        password: 'password',
        first_name: 'jimi',
        last_name: 'hendrix'
    })

      User.create!({
        email: 'kurdt@love.com', 
        password: 'password',
        first_name: 'kdog',
        last_name: 'cobsie'
    })
      User.create!({
        email: 'lcd@soundsystem.com', 
        password: 'password',
        first_name: 'northamerican',
        last_name: 'technoguy'
    })
  

  
    puts "Done!"
  end
