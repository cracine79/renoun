require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`

    User.destroy_all
    Instrument.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('instruments')
  
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
        first_name: 'taylor',
        last_name: 'hawkins'
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

    puts "Creating instruments..."

      gibsonSg = Instrument.create!({
          item_name: 'Gibson SG Standard',
          condition: 'Used - Good',
          price: 3000,
          description: 'Solid mahogany body. Mahogany neck. Ebony fretboard. Walnut Finish. Gibson square hardshell case w/purple lining',
          category: 'Guitar',
          brand: 'Gibson',
          model: 'SG Standard',
          shipping: 40,
          seller_id: 2,
          available: true

      })

      gibsonSg.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/sg1.webp'), filename: 'sg1.webp')

      fenderStrat = Instrument.create!({
        item_name: 'Fender Eric Johnson Stratocaster * Sexy Blonde Bombshell!',
        condition: 'Used - Excellent',
        price: 2500,
        description: 'I’ve been a full-time music teacher for many decades. This spectacular Eric Johnson Stratocaster comes from my personal collection. I used her throughout my last album, ”Love Hurricane,” on virtually every track. Check out the attached clip to hear this beauty in all her glory! $2,500. No disappointments. She is truly exceptional. Thanks for looking! ',
        category: 'Guitar',
        brand: 'Fender',
        model: 'Eric Johnson Stratocaster',
        shipping: 0,
        seller_id: 3,
        available: true

    })
      fenderStrat.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Fender+Eric+Johnson.webp'), filename: 'fenderStrat.webp')

    gretschStreamliner = Instrument.create!({
        item_name: 'Gretsch G3166 Historic Streamliner with Gretsch Bucker Pickups',
        condition: 'Used - Mint',
        price: 745,
        description: 'Here’s an axe that will really make you stand out…sonically and visually…rockabilly meets glam! Superior construction (made in the Peerless factory) and hot humbuckers give this thinline hollowbody some major snarl. Pristine condition…I should keep it but debt forces one to make tough choices.',
        category: 'Guitar',
        brand: 'Gretsch',
        model: 'Streamliner',
        shipping: 0,
        seller_id: 3,
        available: true
    })

    gretschStreamliner.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Gretsch.webp'), filename: 'gretsch.webp')


    fenderTele = Instrument.create!({
      item_name: 'Fender Player Telecaster',
      condition: 'Used - Excellent',
      price: 538.99,
      description: '**** USED -EXCELLENT CONDITION CHEAPEST ON REVERB IN THIS CONDITION!!! GET THIS BEFORE ITS GONE ****',
      category: 'Guitar',
      brand: 'Fender',
      model: 'Player Telecaster with Maple Fretboard',
      shipping: 20,
      seller_id: 4,
      available: true

  })
  fenderTele.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Fender+Player+Telecaster.webp'), filename: 'deanZ.webp')

  deanZ = Instrument.create!({
    item_name: 'Dean Z Select 24 Kahler',
    condition: 'Brand New',
    price: 1229,
    description: 'NEW Dean Z Select 24 Kahler electric guitar in Classic White. This is a NEW A-stock instrument, NOT a "B" or factory second. This instrument is discounted for the blemishing on the back (but nobody will see it except you!)',
    category: 'Guitar',
    brand: 'Dean',
    model: 'Z Select 24 Kahler',
    shipping: 0,
    seller_id: 5,
    available: true

})
deanZ.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Dean+Z.webp'), filename: 'deanZ.webp')


squierStrat = Instrument.create!({
  item_name: 'Fender Squier Stratocaster - Sunburst',
  condition: 'Used - Good',
  price: 159,
  description: 'Slightly used Sunburst Fender Strat. I only found two slight defects, shown by the photos. One is a small bubble in the gloss finish on the side and the other is a couple indent marks in the back of the neck. Other than those two things, this is in excellent condition. Please message us if you would like any other photos or have questions.',
  category: 'Guitar',
  brand: 'Squier',
  shipping: 0,
  seller_id: 5,
  available: true

})

squierStrat.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Squier+Stratocaster.webp'), filename: 'squierStrat.webp')


prsCe = Instrument.create!({
  item_name: 'PRS SE CE 24 - Blood Orange',
  condition: 'Brand New',
  price: 716.21,
  description: 'The SE CE 24 pairs the traditional PRS Custom 24 combination of a maple top, mahogany back, and rosewood fretboard with a bolt-on maple neck. The added snap and response of bolt-on construction has been an essential part of guitar history from the beginning, and the CEs voice and appointments carry that tradition forward with PRSs unique spin on a classic. The 85/15 "S" pickups provide extended high and low end with clarity and balance, while the push/pull tone control adds the versatility of coil splits.',
  category: 'Guitar',
  brand: 'PRS',
  model: 'PRS SE CE 24',
  shipping: 45,
  seller_id: 8,
  available: true

})

prsCe.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/PRS.jpeg'), filename: 'PRS.jpeg')


rickenbacker = Instrument.create!({
  item_name: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Guitar, Fire Glo, 3 Toaster Pickups, Stereo, OHSC 2024',
  condition: 'Brand New',
  price: 3799,
  description: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Electric Guitar, Fire Glo, 3 Vintage-Style Toaster Pickups, Double Binding, Stereo, w/Hardshell Case.  At the request of The Whos Pete Townshend, The 1993 Plus takes Rickenbackers iconic 330 body style and adds an "F"-Hole, Double Body Binding, a Wide Neck, Pearloid Triangle Inlays, 3 Vintage-Style Toaster Pickups, Ric-O-Sound Stereo outs, and a vintage-style trapeze tailpiece. Pete Townshend asked Rickenbacker to upgrade his cherished Model 1993 guitar. The result is the 1993Plus, enhanced with an 1/8-inch wider neck, rosewood fingerboard, and more stable 2-piece neck design with a round heel for increased comfort and upper-fret access. This classic semi-hollowbody 12-string electric guitar is fitted with three vintage reissue Toaster Top single-coil pickups, stereo output, a trapeze tailpiece, vintage knobs, and a proper F-hole. Double body binding and pearlescent inlays add a touch of refinement. X-bracing in the body helps to bring out the rich, full jangle our favorite Rickenbacker 12-strings are famous for.',
  category: 'Guitar',
  brand: 'Rickenbaker',
  model: '1993 Plus',
  shipping: 0,
  seller_id: 7,
  available: true

})

rickenbacker.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Rickenbacker.webp'), filename: 'Rickenbacker.webp')

  
  

  
    puts "Done!"
  # end
