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
    InstrumentReview.destroy_all
    User.destroy_all
    puts "even orders . . . ."
    Order.destroy_all
    Favorite.destroy_all
    Cart.destroy_all
    SellerReview.destroy_all
    Instrument.destroy_all
   
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('instruments')
    ApplicationRecord.connection.reset_pk_sequence!('orders')
    ApplicationRecord.connection.reset_pk_sequence!('carts')
    ApplicationRecord.connection.reset_pk_sequence!('seller_reviews')
    ApplicationRecord.connection.reset_pk_sequence!('favorites')
    ApplicationRecord.connection.reset_pk_sequence!('instrument_reviews')
  
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
        first_name: 'kurdt',
        last_name: 'cobsie'
    })
      User.create!({
        email: 'lcd@soundsystem.com', 
        password: 'password',
        first_name: 'leo',
        last_name: 'technoguy'
    })

    puts "Creating instruments..."

    schecter_km = Instrument.create!({
      item_name: 'Schecter Keith Merrow Signature KM-6 Mk-III Standard 2019 - Present - Toxic Smoke Green',
      condition: 'Used - Excellent',
      price: 9600,
      description: 'Guitar shows no visible signs of wear. Plays and sounds great.',
      category: 'Guitar',
      brand: 'Schecter',
      model: 'MK III',
      shipping: 0,
      seller_id: 2,
      available: true
    })


    schecter_km.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/schecter_km.webp'), filename: 'schecter_km.webp')

    rickenbacker = Instrument.create!({
        item_name: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Guitar, Fire Glo, 3 Toaster Pickups, Stereo, OHSC 2024',
        condition: 'Brand New',
        price: 3799,
        description: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Electric Guitar, Fire Glo, 3 Vintage-Style Toaster Pickups, Double Binding, Stereo, w/Hardshell Case.  At the request of The Whos Pete Townshend, The 1993 Plus takes Rickenbackers iconic 330 body style and adds an "F"-Hole, Double Body Binding, a Wide Neck, Pearloid Triangle Inlays, 3 Vintage-Style Toaster Pickups, Ric-O-Sound Stereo outs, and a vintage-style trapeze tailpiece. Pete Townshend asked Rickenbacker to upgrade his cherished Model 1993 guitar. The result is the 1993Plus, enhanced with an 1/8-inch wider neck, rosewood fingerboard, and more stable 2-piece neck design with a round heel for increased comfort and upper-fret access. This classic semi-hollowbody 12-string electric guitar is fitted with three vintage reissue Toaster Top single-coil pickups, stereo output, a trapeze tailpiece, vintage knobs, and a proper F-hole. Double body binding and pearlescent inlays add a touch of refinement. X-bracing in the body helps to bring out the rich, full jangle our favorite Rickenbacker 12-strings are famous for.',
        category: 'Guitar',
        brand: 'Rickenbacker',
        model: '1993 Plus',
        shipping: 0,
        seller_id: 6,
        available: true

      })

      rickenbacker.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Rickenbacker.webp'), filename: 'Rickenbacker.webp')


      tyrannochorus = Instrument.create!({
        item_name: 'Used Fuzzrocious Tyrannochorus Modulated Fuzz Chorus Pedal',
        condition: 'Used - Mint',
        price: 149,
        description: "A used Fuzzrocious Tyrannochorus in mint condition. It will ship as shown in the photos with the addition of the original box and any any all factory documentation. The pedal is fully tested and is in perfect working condition. Please let us know if you have any questions.  Dipping their toes into the world of modulation for a second time, Fuzzrocious brings guitarists the Tyrannochorus: a gnarly-sounding chorus pedal that's been supercharged with a gated fuzz circuit. Don't be fooled by its charmingly silly t-rex graphic - this pedal means business. From standard chorus effects to alien-like modulation and crushing fuzz tones, the Tyrannochorus lashes out with a unique sound that's fun, exciting, and perfect for players seeking a one-of-a-kind sonic experience.",
        category: 'pedals_and_effects',
        brand: 'Fuzzrocious',
        model: 'Fuzzrocious Tyrannochorus',
        shipping: 0,
        seller_id: 8,
        available: true
      })


      tyrannochorus.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/trex.webp'), filename: 'tyrannochorus.jpeg')

      fender_customshop_telecaster = Instrument.create!({
        item_name: 'Fender Custom 60 Telecaster NOS - 7.71 lbs',
        condition: 'Used - Good',
        price: 2871,
        description: 'Body:  Small scratch bass side of pickguard at neck. Small finish crack on lower horn - front. A couple of tiny dings and finish blemishes throughout.  Pickup and saddles are non-original. Original saddles are included in case.Disclaimer: You are not buying a setup, you are buying an instrument. This means that the setups we perform on instruments for sale are intended to inspect and ensure proper function of various aspects of the instruments. Customer-based setups are personal and no two players will require the same setups measurements.',
        category: 'Guitar',
        brand: 'Fender',
        model: 'Telecaster',
        shipping: 129,
        seller_id: 7,
        available: true
      })

        fender_customshop_telecaster.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Fender_custom_telecastser.webp'), filename: 'fender_custom_telecaster.webp')


      rolandSaturn = Instrument.create!({
        item_name: ' Roland SA-09 Saturn 09 44-Key Synthesizer - Black',
        condition: 'Used - Excellent',
        price: 300,
        description: "The product will show few signs of wear, works properly.  Please feel free to contct if you have any questions.",
        category: 'keyboards_and_synths',
        brand: 'Roland',
        model: 'SA-09 Saturn 44 Key Synthesizer',
        shipping: 100,
        seller_id: 3,
        available: true
      }) 

      rolandSaturn.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/saturn.webp'), filename: 'rolandSaturn.jpeg')


      jackson_king  = Instrument.create!({
        item_name: 'Jackson Custom Shop King V 2023 - Platinum Pink Metallic',
        condition: 'Used - Mint',
        price: 3400,
        description: 'Jackson Custom Shop King V in Platinum Pink Metallic. Obviously I play in an 80s band. This guitar is a custom shop from last year, flamed maple fingerboard, ebony shark fins, schaeller locking tuners, Dimarzio Evo neck pickup, Bill Lawerence L500XL bridge, all the Floyd upgrades, claw, block, springs, tremstop, sounds and plays amazing. Great guitar, just listing to finish one of my cars for summer. Listing this full on custom for the price of a new basic black USA model. Cant find any issues but listing as excellent in the event someone finds a scratch I cant see. Pictures in the direct sun to show you what I see, only played a few times. I can put the truss rod cover back on as well as back plate. Ill also remove the "custom" sweetwater sticker from the back. Sold as is no returns. Thank you for looking.',
        category: 'Guitar',
        brand: 'Jackson',
        model: 'King V',
        shipping: 100,
        seller_id: 7,
        available: true
      })

      jackson_king.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Jackson_King_V.jpeg'), filename: 'jackson_king_v.webp')



      gibsonSg = Instrument.create!({
          item_name: 'Gibson SG Standard',
          condition: 'Used - Good',
          price: 3000,
          description: 'Solid mahogany body. Mahogany neck. Ebony fretboard. Walnut Finish. Gibson square hardshell case w/purple lining',
          category: 'Guitar',
          brand: 'Gibson',
          model: 'SG',
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
        model: 'Stratocaster',
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
      model: 'Telecaster',
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
    seller_id: 4,
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
  model: 'Stratocaster',
  shipping: 0,
  seller_id: 6,
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
  seller_id: 6,
  available: true

})

prsCe.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/PRS.jpeg'), filename: 'PRS.jpeg')




  
  
fender_jazzmaster = Instrument.create!({
  item_name: 'Fender American Pro Jazzmaster - 8.48 lbs',
  condition: 'Used - Good',
  price: 1299,
  description: 'Originally intended for sophisticated jazz guitarists, the Jazzmaster was quickly embraced by musicians attracted to its left-of-center looks and fat sound. A direct descendent of the guitar that powered underground music from the late-60s to today, the American Professional Jazzmaster is ready to lend its unique sound to your playing.  An elegant model with flexible electronics and a rich voice, the Jazzmasters introduction in 1958 marked the first time a rosewood fingerboard was used on a Fender instrument. Thanks to its effortless playing feel and ergonomic offset-waist body, the Jazzmaster has powered infinite musical genres, including surf rock, gospel, new wave and indie rock, among others.',
  category: 'Guitar',
  brand: 'Fender',
  model: 'Jazzmaster',
  shipping: 129,
  seller_id: 7,
  available: true
})

fender_jazzmaster.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Fender+American+Pro+Jazzsmaster.webp'), filename: 'fender_jazzmaster.webp')



epiphone_sg  = Instrument.create!({
  item_name: 'Epiphone SG Pro Electric Guitar Plays and Sounds Great!',
  condition: 'Used - Good',
  price: 365,
  description: 'Ephiphone SG Pro!  Plays and Sounds Great!  New Strings!  Fresh setup!  Very nice used condition!',
  category: 'Guitar',
  brand: 'Epiphone',
  model: 'SG',
  shipping: 60,
  seller_id: 7,
  available: true
})

epiphone_sg.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Epiphone_SG.jpeg'), filename: 'epiphone_sg.webp')


squier_jazzmaster  = Instrument.create!({
  item_name: 'Squier J Mascis Jazzmaster with Rosewood Fretboard 2012 - 2017 - Vintage White',
  condition: 'Used - Excellent',
  price: 525,
  description: 'If it were not for the crease in the finish by the guitar strap and some marks on the pickguard this guitar would be listed as mint.  Includes padded gig bag and tremolo arm.  Mad ein June of 216 with a Rosewood fretboard.',
  category: 'Guitar',
  brand: 'Squier',
  model: 'Jazzmaster',
  shipping: 30,
  seller_id: 8,
  available: true
})

squier_jazzmaster.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Squier_jazzmaster.webp'), filename: 'squier_jazzmaster.webp')



epiphone_les_paul  = Instrument.create!({
  item_name: 'Epiphone Les Paul 1960 Tribute Plus - Wine Red Flame Top',
  condition: 'Used - Excellent',
  price: 560,
  description: 'An Ephiphone 1950 Tribute Plus in excellnet condition, comes with hardshell case.  Setup with nice low action. CTS pots.  Gibson USA 57 Classic Pickups.  Coil tapped with push/pull.  Grover locking tuners',
  category: 'Guitar',
  brand: 'Epiphone',
  model: 'Les Paul',
  shipping: 35,
  seller_id: 8,
  available: true
})

epiphone_les_paul.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Epiphone_les_paul_tribute.webp'), filename: 'epiphone_les_paul.webp')


gibson_les_paul  = Instrument.create!({
  item_name: '2012 Gibson Les Paul Studio 60s Tribute with P90s 2010 - 2015 - Worn Cherry Burst',
  condition: 'Used - Good',
  price: 1100,
  description: 'American made. The finest sounding and playing guitar Ive ever owned. The chambered mahogany body lightens up the Les Paul to about 7 1/2 lbs without sacrificing tone. The american factory Gibson P90s are probably the most versatile pickups ever made, getting beautiful warm lush cleans in the neck with the volume and tone adjusted down, dirty biting blues and rock tones in the bridge, fuzzy alt, gnarly drone metal, everything. All electronics function properly. Hard to find Cherryburst. Tons of beautiful, honest players wear that has no effect on playability. No case. Bills must be paid :(',
  category: 'Guitar',
  brand: 'Gibson',
  model: 'Les Paul',
  shipping: 100,
  seller_id: 8,
  available: true
})

gibson_les_paul.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Gibson_les_paul_studio.jpeg'), filename: 'gibson_les_paul.webp')


  

gibson_gold_top = Instrument.create!({
  item_name: 'Gibson Les Paul 58 (54) Reissue 1971 - 1972 - Goldtop',
  condition: 'Used - Excellent',
  price: 4352,
  description: '1971 Gibson Les Paul 58 54 Reissue Gold Top w/OHSC.  1 Piece Body 1 Piece Neck.  Truss rod works perfectly.',
  category: 'Guitar',
  brand: 'Gibson',
  model: 'Les Paul',
  shipping: 0,
  seller_id: 7,
  available: true
})


gibson_gold_top.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Gibson_gold_top.jpeg'), filename: 'Gibson_gold_top.jpeg')



gibson_explorer = Instrument.create!({
  item_name: 'Gibson Explorer 76 1990 - Sunburst, Vintage, Bill Lawrence HB-L, HB-R, KILLER GUITAR!',
  condition: 'Used - Good',
  price: 2595,
  description: '1990 Vintage Gibson Explorer 76. Guitar has been well played, it does have scratches and dings, and buckle rash, its been a gigged instrument, and it 34 years old. So if you want a new one that pretty and looks good on the wall for your friends to look at, this isnt it. Lol. But if you want an Awesome, incredible playing Vintage Explorer Guitar, that plays great, and has KILLER, EXPENSIVE, Bill Lawrence HB-L and HB-R pickups, that sounds great, that you can play all the time, and banged it against something, or drop it on stage and it does not matter, than this is your guitar. I hate to see it go, it sounds great, plays great, never any neck damage, no breaks or repairs, just a really good Gibson Explorer with great pups and electronics. There are quite a few pics of it, I tried to get all that I can. I have the original Gibson Hardshell Case, the handle on the case is gone, but its an easy fix. The lock needs some attention but also an easy fix. I have another universal case its been in, but the original is the one to have. There are pics of the case as well. Will be shipped UPS and insured as all my packages are. Cleaned this guitar today, lemon oil the Fretboard and installed a new set of Slinky 10s. Guitar is ready to jump on stage with as soon as you get it. Absolutely zero problems other than scratches and dings. Feel free to check my feedback and please ask any questions if you have them.',
  category: 'Guitar',
  brand: 'Gibson',
  model: 'Explorer',
  shipping: 0,
  seller_id: 10,
  available: true
})


gibson_explorer.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/gibson_explorer.jpeg'), filename: 'gibson_explorer.jpeg')



gibson_trini_lopez = Instrument.create!({
  item_name: 'Gibson Trini Lopez 1966 - Red',
  condition: 'Used - Good',
  price: 6450,
  description: 'Oh my. If you like fun, and you like guitars, you have just arrived here at the place for fun. A long time ago my band played a show in Boulder Colorado with a band called Human Head Transplant. It is a fond memory. My recent purchase of this guitar brought them to mind. Maybe this is a Barney Lopez. The headstock of this guitar is NOT stock. It seems to have been transplanted. I think I can see that and will add more pictures. The tailpiece is vintage Gibson but does not mention Trini Lopez.',
  category: 'Guitar',
  brand: 'Gibson',
  model: 'Trini Lopez',
  shipping: 0,
  seller_id: 10,
  available: true
})


gibson_trini_lopez.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Gibson_Trini_lopez.webp'), filename: 'Gibson_trini_lopez.webp')


schecter_apocalypse = Instrument.create!({
  item_name: 'Schecter C-1 FR S Apocalypse Sustainiac Rusty Grey',
  condition: 'Used - Excellent',
  price: 999.99,
  description: 'This guitar is in excellent condition. It looks and plays fantastic. There is some shininess where my pick hand rests, but this is normal on satin finish guitars. Original gig bag and the bar is included. I will probably regret selling this one, so hurry up before I change my mind LOL!',
  category: 'Guitar',
  brand: 'Schecter',
  model: 'Apocalypse',
  shipping: 0,
  seller_id: 10,
  available: true
})


schecter_apocalypse.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/schecter_apocalypse.webp'), filename: 'schecter_apocalypse.webp')







squier_51 = Instrument.create!({
  item_name: 'Squire 51 2005 - Skyblue & silver paisley',
  condition: 'Used - Good',
  price: 275,
  description: 'This is a Squire 51 , 2005 model the earlier years its been fun have had it painted 3 times ,changed the neck to a Somnium custom shop neck its a better neck a little thicker nicer frets if you get a chance google there guitars pretty amazing i instruments , 1 St have the original 4 wire humbucker and the single pickup white cover it comes with the guitar strap thats on it it works it works in the 1st 2 nd and 3 rd selector switch positions the humbucker in it is a Kramer Beretta Special sounds pretty nice with the original pickup paint job isnt perfect Id give it a 9.6 has kluson split tunners new strings and they are a great little ax was going to keep it have the neck up for sale here on renoun , so the neck thats on it is the one Im selling with it thanks for the look have a good one',
  category: 'Guitar',
  brand: 'Squier',
  model: 'Squier Fifty-One',
  shipping: 0,
  seller_id: 3,
  available: true
})


squier_51.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Squier_51.webp'), filename: 'squier_51.webp')


epiphone_blue_les_paul = Instrument.create!({
  item_name: 'Epiphone Les Paul Muse Radio Blue Metallic',
  condition: 'Used - Good',
  price: 459.02,
  description: 'Up for grabs is a Ephiphone Les Paul Muse in Radio Blue Metallic!  Very nice guitar.  It sounds fantastic with the factory pickups.  One small knick near bridge pickup as seen in photo but otherwise excellent condition.',
  category: 'Guitar',
  brand: 'Epiphone',
  model: 'Les Paul',
  shipping: 0,
  seller_id: 6,
  available: true
})


epiphone_blue_les_paul.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/epiphone_blue_les_paul.webp'), filename: 'squier_tele.webp')



boss_sd1 = Instrument.create!({
  item_name: 'Boss SD-1 Japanese black label',
  condition: 'Used - Good',
  price: 135,
  description: 'This ones a classic. Its timeless and sounds great. The pedal has been around for a while and has the wear to prove it but that just makes it cooler. Also, this one was made in Japan and has the black label. Ill ship it the same day if purchased before 3pm CST, otherwise next day. Please feel free to message with any questions or reasonable offers. Thanks for looking!',
  category: 'pedals_and_effects',
  brand: 'Boss',
  model: 'SD1',
  shipping: 0,
  seller_id: 5,
  available: true
})


boss_sd1.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/boss_od1.webp'), filename: 'boss_od1.webp')

tonebender = Instrument.create!({
  item_name: 'Sola Sound Hybrid Tone Bender Fuzz',
  condition: 'Used - Excellent',
  price: 499,
  description: 'This is an incredible fuzz pedal. Im a drummer who acquired this amazing find through a chance studio encounter. I used it once when I was attempting to play guitar, but basically gave up on that. Im selling most of my impressive guitar gear collection and this beauty is going as well. Im of course including the original box with a letter signed by Anthony Macari explaining that it was built by Jake Rothman, the originator of this circuit. Also included are the original rubber feet inserts (as shown on the Sola Sound letter) to use without pedalboard tape (the tape can obviously be removed).',
  category: 'pedals_and_effects',
  brand: 'Sola Sound',
  shipping: 0,
  seller_id: 1,
  available: true
})


tonebender.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/tonebender.webp'), filename: 'tonebender.webp')




colorsound = Instrument.create!({
  item_name: 'Colorsound Supa Tone Bender fuzz distortion Sola Sound BC184C guitar pedal not overdriver ZCD',
  condition: 'Used - Excellent',
  price: 625,
  description: "Very good bordering excellent condition.  No rust to pots/metal electronic pieces.  Functions 100%.  BC184C trannies baby!!!!!!",
  category: 'pedals_and_effects',
  brand: 'Colorsound',
  model: 'Supa Tonebender Fuzz',
  shipping: 13,
  seller_id: 4,
  available: true
})


colorsound.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/colorsound.jpeg'), filename: 'colorsound.jpeg')


cooperFx = Instrument.create!({
  item_name: 'Cooper FX Generation Loss 2016 - 2020 - Blue',
  condition: 'Used - Good',
  price: 300,
  description: "In good operating condition, but these older ones have a big volume drop so be aware of that before buyin.",
  category: 'pedals_and_effects',
  brand: 'Cooper FX',
  model: 'Generation Loss',
  shipping: 15,
  seller_id: 5,
  available: true
})


cooperFx.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/cooperFx.jpeg'), filename: 'cooper.jpeg')

bossHm2 = Instrument.create!({
  item_name: 'BossHM-2 Heavy Metal',
  condition: 'Used - Mint',
  price: 140,
  description: "A very clean HM-2!  The LED is a little dim when on, but it sounds great!",
  category: 'pedals_and_effects',
  brand: 'Boss',
  model: 'HM-2 Heavy Metal',
  shipping: 0,
  seller_id: 5,
  available: true
})


bossHm2.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/bosshm2.webp'), filename: 'bossHm2.jpeg')


bossDm2 = Instrument.create!({
  item_name: 'Boss DM-2 Delay (Black Label) 1982 MN3205 Chip MIJ Vintage Made in Japan',
  condition: 'Used - Excellent',
  price: 289,
  description: "This effects pedal is in Excellent condition. This unit has the MN3205 chip. There are minor scattered chips, scuffs and stains on the rubber. This does not impact sound or functionality. This unit has been tested and all functions are operational. The original packaging and instructions are not included. This unit require a BOSS ACA power supply or a 9V battery. Note: The LED is now functional on this unit.",
  category: 'pedals_and_effects',
  brand: 'Boss',
  model: 'DM-2 Delay Pedal',
  shipping: 14,
  seller_id: 5,
  available: true
})


bossDm2.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/bossDm2.webp'), filename: 'bossDm2.jpeg')


walrus = Instrument.create!({
  item_name: 'Walrus Audio Messner Overdrive 2015 - 2017 - White / Black',
  condition: 'Used - Excellent',
  price: 93,
  description: "Nice transparent Walrus Audio Messner Stage-One Overdrive in excellent cosmetic condition and works flawlessly. Original box and materials included. No power supply.  The Messner is a low gain-transparent overdrive boasting a wide range of overdrive possibilities.  It is designed to preserve the natural voice of your guitar by not coloring your tone, but giving the user the ability to dial in and out the exact amount of tone they desire.  A toggle switch allows the user to bypass the clipping diodes from the circuit in the open position and employ them in the closed position, allowing a wide range of breakup from subtle to dramatic. Flip it to the open position and dial in a lower drive setting to add subtle aggression to your tone.  Run it in the closed position and turn the gain knob up for more compressed and punchy tones.  The color control works in all modes, giving you the ability to dial in brighter tones as you turn it up and darker tones when turned down. ",
  category: 'pedals_and_effects',
  brand: 'Walrus Audio',
  model: 'Messner Overdrive',
  shipping: 0,
  seller_id: 2,
  available: true
})


walrus.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/walrus.jpeg'), filename: 'walrus.jpeg')


pinkPanther = Instrument.create!({
  item_name: 'JHS Pink Panther Delay',
  condition: 'Used - Excellent',
  price: 250,
  description: "JHS Pink Panther Delay w low serial #668. This discontinued delay pedal allows you to switch between digialtal and tape delay and sounds great. ",
  category:'pedals_and_effects',
  brand: 'JHS',
  model: 'Pink Panther Delay',
  shipping: 15,
  seller_id: 2,
  available: true
})


pinkPanther.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/pinkPanther.jpeg'), filename: 'pinkPanther.jpeg')


octaveClang = Instrument.create!({
  item_name: 'Death by Audio Octave Clang V2 Fuzz Pedal w/Octave Up - Used',
  condition: 'Used - Mint',
  price: 225,
  description: "The highly coveted Octave Clang has made a triumphant return to Death By Audio's Queens workshop. Long presumed extinct, the OC was never really gone, merely in a state of hibernation - evolving, refining, and enhancing its already extraordinary sound. In the decade since it disappeared, we revisited the original Clang circuit, sculpting it into something better - a more ferocious, menacing, and thunderous force that is as usable as possible for today's musicians. ",
  category: 'pedals_and_effects',
  brand: 'Death By Audio',
  model: 'Octave Clang V2',
  shipping: 0,
  seller_id: 3,
  available: true
})


octaveClang.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/octaveClang.webp'), filename: 'octaveClang.jpeg')


dynamicWah = Instrument.create!({
  item_name: 'Donner Dynamic Wah',
  condition: 'Used - Good',
  price: 24,
  description: "The Donner Dynamic Auto Wah Mini is a fully analog, true bypass unit, and features four control knobs. Please note that all accessories including cables, boxes and power supplies will be accurately photographed in our listings. If any of the previously mentioned items are not viewable in the photos, they are not included with the advertised product.",
  category: 'pedals_and_effects',
  brand: 'Donner',
  model: 'Jet Convolution Flanger',
  shipping: 15,
  seller_id: 4,
  available: true
})


dynamicWah.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/dynamicWah.webp'), filename: 'dynamicWah.webp')


dodEnvelope = Instrument.create!({
  item_name: 'DOD FX25 Envelope Filter 1983',
  condition: 'Used - Good',
  price: 84,
  description: "The FX25 Envelope Filter was derived from DOD's well-received 440 Envelope Filter. Like the 440, the FX25 uses a bandpass filter circuit where the peak frequency is determined by the input signal level, for a touch-controlled wah or auto-wah effect. The FX25 was one of the original ten DOD FX-series pedals that debuted in 1982, and remained in production until it was replaced by the FX25B in 1998.",
  category: 'pedals_and_effects',
  brand: 'DOD',
  model: 'FX Envelope Filter',
  shipping: 15,
  seller_id: 4,
  available: true
})


dodEnvelope.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/dodEnvelope.webp'), filename: 'dodEnvelope.webp')


danArmstrong = Instrument.create!({
  item_name: 'Dan Armstrong Red Ranger Reissue - Red',
  condition: 'Used - Excellent',
  price: 175,
  description: "Specifications -9 mm wide x 59 mm high x 70 mm deep  - Unit protrudes only 43 mm from the face of a guitar  - Hand made and hand assembled in the U.S",
  category: 'pedals_and_effects',
  brand: 'Dan Armstrong',
  model: 'Red Ranger',
  shipping: 0,
  seller_id: 9,
  available: true
})


danArmstrong.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/danArmstrong.webp'), filename: 'danArmstrong.jpeg')


demonKing = Instrument.create!({
  item_name: 'Fuzzrocious Demon King - Hand Painted',
  condition: 'Used - Good',
  price: 165,
  description: "Custom painted demon king. Bought in 2015 or so. Works great. Has some wear from touring use. Just isn’t quite what I’m needing these days.",
  category: 'pedals_and_effects',
  brand: 'Fuzzrocious',
  model: 'Demon King 2014',
  shipping: 0,
  seller_id: 9,
  available: true
})


demonKing.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Fuzzrocious.webp'), filename: 'demonKing.jpeg')



fiveState = Instrument.create!({
  item_name: 'Walrus Audio Eras 5-state Distortion Pedal (Erasd1)',
  condition: 'Used - Good',
  price: 171,
  description: "This item is in excellent condition and perfect working order. Product includes all original accessories. This item ships in its original factory packaging.",
  category: 'pedals_and_effects',
  brand: 'Walrus Audio',
  model: 'Eras Five-State Distortion',
  shipping: 0,
  seller_id: 7,
  available: true
})


fiveState.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/fiveState.jpeg'), filename: 'fiveState.jpeg')


catlinBread = Instrument.create!({
  item_name: 'Catalinbread Karma Suture Fuzz - Purple Germanium with original box',
  condition: 'Used - Good',
  price: 85,
  description: "The Karma Suture is capable of a wide range of sweet, even-order harmonic distortion responses – from heavily saturated fuzz tones, to big and open overdrive, to a sparkling boost. And no matter how you have the pedal set, the tone and response is always alive, sensitive to your every playing nuance.",
  category: 'pedals_and_effects',
  brand: 'Catalinbread',
  model: 'Karma Suture Fuzz',
  shipping: 0,
  seller_id: 6,
  available: true
})


catlinBread.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Catalinbread.webp'), filename: 'caitlinBread.jpeg')


bigMuff = Instrument.create!({
  item_name: 'Used Electro-Harmonix EHX Op-Amp Big Muff Pi Distortion/Sustainer Pedal OpAmp',
  condition: 'Used - Mint',
  price: 71,
  description: "Mint with all original packaging! With original late-70s Op-Amp Big Muffs selling for exorbitant prices, Mike Matthews decided to take the power to the people and reissue the classic pedal at a price that players could afford! The circuitry of the new Op-Amp Big Muff —sometimes also referred to as the IC or V4 Big Muff— has been faithfully re-created while several practical enhancements have been added including a compact, die-cast chassis and true bypass switching. ",
  category: 'pedals_and_effects',
  brand: 'Electro Harmonix',
  model: 'Op-Amp Big Muff Pi Reissue Fuzz',
  shipping: 9.95,
  seller_id: 5,
  available: true
})


bigMuff.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/bigMuff.webp'), filename: 'bigMuff.jpeg')


tweakFuzz = Instrument.create!({
  item_name: 'Seymour Duncan TweakFuzz Tweak Fuzz Fuzz Pedal',
  condition: 'Used - Excellent',
  price: 75,
  description: "In excellent shape.  Can't find a mark on it.  Hard to tell from brand new!",
  category: 'pedals_and_effects',
  brand: 'Seymore Duncan',
  model: 'Tweak Fuzz',
  shipping: 12,
  seller_id: 2,
  available: true
})


tweakFuzz.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/tweakFuzz.webp'), filename: 'tweakFuzz.jpeg')


yamahaMotif = Instrument.create!({
  item_name: 'Yamaha Motif ES8 2004 - Gray',
  condition: 'Used - Excellent',
  price: 1000,
  description: "Only owner, perfect working conditions, minor scrash, Memory RAM Upgrade. Make Your offer!!",
  category: 'keyboards_and_synths',
  brand: 'Yamaha',
  model: 'Motif ES 8',
  shipping: 500,
  seller_id: 2,
  available: true
})

yamahaMotif.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/yamaha.webp'), filename: 'yamaha.jpeg')

akaiProductionCenter = Instrument.create!({
  item_name: 'Akai MPC1000 Music Production Center 2004 - 2013 - Blue',
  condition: 'Used - Good',
  price: 470,
  description: "2004 MPC 1000 comes with manual. Updated to Os2 16mb internal. Just missing Q link caps and a little dusty from the shelf but I have used it for years and absolutely love it",
  category: 'keyboards_and_synths',
  brand: 'Akai',
  model: 'MPC1000 Music Production Center',
  shipping: 25,
  seller_id: 2,
  available: true
})


akaiProductionCenter.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/akai.webp'), filename: 'akai.jpeg')



bossDr3 = Instrument.create!({
  item_name: 'Boss DR-3 Dr. Rhythm - Silver',
  condition: 'Used - Excellent',
  price: 55,
  description: "The product will show few signs of wear, has fully tested.  Please feel free to contact if you have any questions.",
  category: 'keyboards_and_synths',
  brand: 'Boss',
  model: 'DR-3 Dr. Rhythm',
  shipping: 20,
  seller_id: 3,
  available: true
})


bossDr3.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/bossDr3.jpeg'), filename: 'bossDr3.jpeg')


korg = Instrument.create!({
  item_name: 'Korg Volca Sample UV knob rings',
  condition: 'Used - Mint',
  price:19.99,
  description: "These UV reactive rings for the Volca Sample are like new.  Pictured is the Volca beats for example but these are specifically a set for the Volca Sample.",
  category: 'keyboards_and_synths',
  brand: 'Korg',
  shipping: 5.99,
  seller_id: 4,
  available: true
})


korg.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/korg.webp'), filename: 'korg.jpeg')


makeNoise = Instrument.create!({
  item_name: 'Make Noise Morphagene Module 2008 - Present - Black',
  condition: 'Used - Excellent',
  price:420,
  description: "This module works perfect and is in great condition. I've barely used this in the year i've had it as i have the Arbhar and don't really need it.",
  category: 'keyboards_and_synths',
  brand: 'Make Noise',
  model: 'Morphagene Module',
  shipping: 10.30,
  seller_id: 4,
  available: true
})


makeNoise.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/makeNoise.webp'), filename: 'makenoise.jpeg')


casio = Instrument.create!({
  item_name: 'Casio PT-1 29-Key Mini Synthesizer Tested / Working',
  condition: 'Used - Good',
  price:89.99,
  description: "Casio PT-1 mini keyboard from the 1980's in White.  Tested and working, clean battery compartment.  Please see pictures for condition.  Original box and power cord are not included.  Batteries(4 AA) included.",
  category: 'keyboards_and_synths',
  brand: 'Casio',
  model: 'PT-1 29-Key Mini Synthesizer',
  shipping: 10.30,
  seller_id: 8,
  available: true
})


casio.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/casio.webp'), filename: 'casio.jpeg')


native = Instrument.create!({
  item_name: 'Native Instruments Komplete Kontrol S49 2010s - Black',
  condition: 'Used - Excellent',
  price:150,
  description: "A premium Midi controller in excellent condition.",
  category: 'keyboards_and_synths',
  brand: 'Native Instruments',
  model: 'Komplete Kontrol S49 Keyboard Controller',
  shipping: 25,
  seller_id: 6,
  available: true
})


native.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/native.webp'), filename: 'native.jpeg')


novation = Instrument.create!({
  item_name: 'Novation Launchpad MKI Pad Controller 2009 - 2014 - Black',
  condition: 'Used - Good',
  price:25,
  description: "Sellying my original launchpad.  Works just fine. To the best of my knowledge.  Haven't used it in years but plugged it in and it lit up.  Don't have the USB for it unforunately, just comes with the unit itself.",
  category: 'keyboards_and_synths',
  brand: 'Novation',
  model: 'Launchpad MKI Pad Controller',
  shipping: 17.97,
  seller_id: 5,
  available: true
})


novation.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/novation.webp'), filename: 'novaiton.jpeg')


alesis = Instrument.create!({
  item_name: 'Alesis VI25 USB MIDI Keyboard / Pad Controller 2010s - Black',
  condition: 'Used - Good',
  price:85,
  description: "Fully functional, very good condition. All knobs and buttons in-tact and work perfectly.  Includes power supply and USB cable.",
  category: 'keyboards_and_synths',
  brand: 'Alesis',
  model: 'VI25 USB MIMDI Keyboard',
  shipping: 17.97,
  seller_id: 1,
  available: true
})


alesis.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/alesis.webp'), filename: 'alesis.jpeg')

polyend = Instrument.create!({
  item_name: 'Polyend Play+ Sample-Based MIDI Groovebox 2024 - Present - Black',
  condition: 'Used - Mint',
  price:600,
  description: "Bought in April to try out the workflow with my PE tracker.  Lovely tool but not for me.  Selling to declutter the setup.  Original box, packaging, cables etc all included. Lightly used for about 40 days, have loaded a couple of Aisjam samples on which I can leave there if you need.",
  category: 'keyboards_and_synths',
  brand: 'Polyend',
  model: 'Play+ Sample-Based MIDI Groovebox',
  shipping: 25.04,
  seller_id: 2,
  available: true
})


polyend.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/polyend.webp'), filename: 'polyend.jpeg')


casioRap = Instrument.create!({
  item_name: 'Casio RAP-1 32-Key Keyboard 1990 - 1991 - Black',
  condition: 'Used - Good',
  price:75,
  description: "Awesome and fun. Works great! only shipping to lower 48, thanks. Let me know if you have any questions.",
  category: 'keyboards_and_synths',
  brand: 'Casio',
  model: 'RAP-1 32-Key Keyboard',
  shipping: 15,
  seller_id: 3,
  available: true
})


casioRap.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/casioRap.jpeg'), filename: 'casioRap.jpeg')











    puts 'creating reviews'

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 5,
      body: 'Billy really knows his stuff when it comes to guitars.  He is a little long winded though, and it can be hard to get him off the phone',
      title: 'Gibson 335',
      stars: 4,
      first_name: 'james',
      last_init: 'i'
    })


    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 5,
      body: 'Overall satisfied, but delivery was longer than expected.',
      title: 'Roland keyboard',
      stars: 3,
      first_name: 'bill',
      last_init: 'w'
    })

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 6,
      body: 'Guitar is sweet.  Setup is sweet.  Strings were dirty.  Also it smelled like whiskey.  Im not sure if that is good or bad.',
      title: 'Fender MIM Stratocaster',
      stars: 4,
      first_name: 'jimi',
      last_init: 'h'
    })


    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 1,
      body: 'Thanks Billy!',
      title: 'Washburn Electric Guitar',
      stars: 5,
      first_name: 'eric',
      last_init: 'c'
    })

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 1,
      body: 'This thing sings.  The seller was professional and did a great job setting up as well as putting some additional finishing touches like adding a coil tap for the bridge humbucker for reverse phasing.  Ready to wail!',
      title: 'American Pro Stratocaster',
      stars: 5,
      first_name: 'david',
      last_init: 'g'
    })


    SellerReview.create!({
      seller_id: 2,
      reviewer_id: 1,
      body: 'Pat is such a warm human being, and he really helped me pick out a guitar that matches my socks',
      title: 'Peavey Predator',
      stars: 5, first_name: 'billy',
      last_init: 'i'

    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 1,
      body: 'Flea sold me a killer bass.  Now I can jam out to RHCP SoCal stylie!',
      title: 'Fender P-bass Lyte',
      stars: 5, 
      first_name: 'les',
      last_init: 'c'
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 8,
      body: 'Seller is pretty shady and hard to get a hold of.  But when the instrument arrived, it was unbelievable, and the price couldnt be beat',
      title: 'PRS SE Mcarty',
      stars: 5,
      first_name: 'eddie',
      last_init: 'v'
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 2,
      body: 'Neck was broken when it arrived.  He did refund me my money, but dude could have packed it better.',
      title: 'Tom Delong Fender Stratocaster',
      stars: 2,
      first_name: 'corey',
      last_init: 'w'
    })



    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 2,
      body: 'Bought this thing for the killswitch.  Now I can make some crazy sounds as guitarist/dj for our group with a sound that youve never heard before, guaranteed!.',
      title: 'Fender Custom Telecaster',
      stars: 5,
      first_name: 'tom',
      last_init: 'm'
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 4,
      body: 'Flea!!!! You are the dude!  Thank you my brah!',
      title: 'Squier P-Bass',
      stars: 5,
      first_name: 'les',
      last_init: 'c'
    })



    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 1,
      body: "I'll miss you always buddy",
      title: 'Roland Electronic Drum Set',
      stars: 5,
      first_name: 'dave',
      last_init: 'g'
    })


    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 4,
      body: "Best seller ever.  Fast, efficient, and totally down to earth.",
      title: 'Gibson SG Standard',
      stars: 5,
      first_name: 'angus',
      last_init: 'y'
    })

    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 9,
      body: "If you need guitars, drums, bass, or anything else related to rock and roll, Taylor is the guy to go to.  Trust me you won't regret it.",
      title: 'Dave Grohl Ephiphone Semi-Hollow Electric Guitar',
      stars: 5,
      first_name: 'steve',
      last_init: 'l'
    })



    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'I didnt know what kind of guitar to get and the seller really helped walk me through the process. At the end of the day I am satisfied with my purhcase.',
      title: 'Ibanez 7 String',
      stars: 4,
      first_name: 'michael',
      last_init: 'j'
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 5,
      body: 'Guitar was on fire when it arrived.  I dig rock and roll, but this is ridiculous',
      title: 'Fender Left Handed Stratocaster',
      stars: 1,
      first_name: 'lady',
      last_init: 'g'
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 3,
      body: 'I love this guitar so much I was crying Mary into the wind all night long',
      title: 'Fender American Telecaster',
      stars: 5,
      first_name: 'jon',
      last_init: 's'
    })

    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 4,
      body: 'Seller is crazy.  Sent me three headbands along with the guitar soaked in what I can only assume is some sort of hallucenogen.',
      title: 'Taylor Acoustic Guitar',
      stars: 5,
      first_name: 'bill',
      last_init: 'c'
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'Second time buying a guitar from Jimi.  Hes still got it and the guitar is great.',
      title: 'Fender Jaguar',
      stars: 5,
      first_name: 'pat',
      last_init: 's'
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'I cant stop buying guitars from this guy.  My wife is going to kill me.  Somebody take my credit card away from me.',
      title: 'Fender Paranormal Semi-hollow Telecaster',
      stars: 5,
      first_name: 'pat',
      last_init: 's'
    })


    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 2,
      body: 'Thank you Angus!  This thing is sick!',
      title: 'Gibson SG Candy Apple Red',
      stars: 5,
      first_name: 'thomas',
      last_init: 'h'
    })

    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 4,
      body: 'Guitar is great.  Seller is polite.  I just dont care for the Satanic references',
      title: 'Flying V Guitar',
      stars: 4,
      first_name: 'kirk',
      last_init: 'h'
    })


    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 9,
      body: 'Worth every penny',
      title: 'Gibson Slash Les Paul',
      stars: 5,
      first_name: 'james',
      last_init: 'h'
    })


    SellerReview.create!({
      seller_id: 1,
      reviewer_id: 2,
      body: 'Thanks so much!  My mom says that I look really cool with this guitar.',
      title: 'Adam Levine Acoustic Guitar',
      stars: 5,
      first_name: 'kevin',
      last_init: 'h'
    })


    SellerReview.create!({
      seller_id: 1,
      reviewer_id: 3,
      body: 'So I was looking for an effects pedal that would make my guitar sound like a crazy Marilyn Manson and homeboy hooked it up!  You know your stuff.  Thanks man, my bandmates were super impressed.',
      title: 'Fuzzosaurus Drivemaster',
      stars: 5,
      first_name: 'volker',
      last_init: 'j'
    })


    SellerReview.create!({
      seller_id: 1,
      reviewer_id: 3,
      body: 'So I was looking for an effects pedal that would make my guitar sound like a crazy Marilyn Manson and homeboy hooked it up!  You know your stuff.  Thanks man, my bandmates were super impressed.',
      title: 'Fuzzosaurus Drivemaster',
      stars: 5,
      first_name: 'volker',
      last_init: 'j'
    })



    SellerReview.create!({
      seller_id: 5,
      reviewer_id: 10,
      body: 'Purchased a Fender MIM strat and he sent me a bullet with a fender neck.  Didnt even fit in the neck pocket properly. Not cool',
      title: 'Fuzzosaurus Drivemaster',
      stars: 1,
      first_name: 'stephen',
      last_init: 'h'
    })

    SellerReview.create!({
      seller_id: 5,
      reviewer_id: 3,
      body: 'Guitar was filthy.  Technically it is an Epiphone, but its more like a health hazard.',
      title: 'Epiphone Special-2',
      stars: 1,
      first_name: 'jake',
      last_init: 's'
    })


    SellerReview.create!({
      seller_id: 5,
      reviewer_id: 2,
      body: 'There are seventeen reasons that you should not buy from this guy specifically.  The top three are as follows: He demands pictures of your dinner for a discount, which is weird, but you do it, but then he wants pictures of lunch.  Then breakfast.  Then . . . forget about it.  Just buy your fuzz pedal from someone else.',
      title: 'Boss OD-1',
      stars: 2,
      first_name: 'cain',
      last_init: 'a'
    })


    SellerReview.create!({
      seller_id: 10,
      reviewer_id: 2,
      body: 'Best seller on Renoun in my opinion.  Fast delivery, great product.  Love it.',
      title: 'Yamaha 42-key Synth',
      stars: 5,
      first_name: 'Jon',
      last_init: 'F'
    })


    SellerReview.create!({
      seller_id: 9,
      reviewer_id: 3,
      body: 'Overall satisified, but the pictures were definitely misleading.  Not nearly as shiny as in the pics',
      title: 'Jackson Super Strat',
      stars: 3,
      first_name: 'Edward',
      last_init: 'S'
    })

    SellerReview.create!({
      seller_id: 9,
      reviewer_id: 6,
      body: 'Dude hooked me up with a sweet beat machine.  Love it!',
      title: 'Ad-Rock Dropabeat Drum Machine',
      stars: 3,
      first_name: 'Kanye',
      last_init: 'W'
    })


    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'Charles C.',
      title: 'Ric 1993 Plus',
      body: "Much easier to play then my 360 64V, because of the wider neck. It has low action, and sounds wonderful ! Flawless workmanship.",
      stars: 5,
      purchased_on_renoun: true
    })

    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'Steve W.',
      title: 'Sweet Axe',
      body: "Really impressed with the playability and build quality of this guitar. Excellent seller good communication and delivery.",
      stars: 5,
      purchased_on_renoun: true
    })


    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'Timothy C.',
      title: '1993 PLUS',
      body: "Immediately recognizable classic jangle when clean, and it plays distorted with super sharp tone. Unbelievable action all the way up the neck. I like the idea of the stronger construction and and the slightly wider neck (Pete Townsend modifications). The wee bit more room on the fingerboard keeps fretting fingers from inadvertently muting neighbor strings. There is actually a chance to get chime from ALL the strings no matter the chord. Amazing craftsmanship. I am floored.",
      stars: 5,
      purchased_on_renoun: true
    })

    



    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'James B.',
      title: 'My Dream Rick',
      body: 'OK- Some stay away from these for various reasons-they tick almost all the boxes-but not quite. This one ticks ALL the boxes for me. Ive owned a 330, 360/12, 660, and 360 in the past. Either the neck is too slim for 12 strings, the body is sharp and cuts into you, the neck only has 21 frets, etc. This 360 has 22 frets-an outstanding Vibrola bar (so hard to find)-Toaster top pickups (the only ones to have) and a super clean unmolested neck and body AND to top it off -THE SILVER HARDSHELL CASE IN PRISTINE CONDITION. Super great playing guitar-it has EVERYTHING. I love it.',
      stars: 5,
      purchased_on_renoun: true
    })

    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'Scott H.',
      title: 'woulda, shoulda, coulda',
      body: 'Before my brother passed away in 1976 he had an early 1970s Jet Glo Black Ricky 360 and a Peavy Vintage amp that he had sold to a friend. I worked all summer to earn enough to by them back and keep them in the family. I quickly learned that I didnt have the patience to learn guitar and took up the blues harp instead. Besides It had a broken neck and even though repaired it wouldnt stay in tune. In 1996 I got a wild hair that I wanted to get serious about the guitar but wanted to play heavy metal and so I traded my Ricky straight across for a new Epi Les Paul Gold Top. I have regretted that decision ever since. The Epi lost value over time while the Rickys gained value. So recently I decided I wanted the Ricky back. I searched and tried to track down what happened to it with no success. So I bought this 1975 Maple Glo one instead. Chicago music gave me an excellent deal on it. It plays exactly like I remembered my old one. This one has the pick ups replaced with humbuckers which in my mind is the best of both worlds. I know I will never regret this purchase and know it will only go up in value over time',
      stars: 5,
      purchased_on_renoun: true
    })

    InstrumentReview.create!({
      instrument_name: 'Rickenbacker 1993 Plus',
      reviewer_name: 'Joe B.',
      title: '2008 Rickenbacker 360',
      body: 'Well made, weight is comparable to a strat. Guitar sounds an plays great. Purchased in excellent condition, but I must say closer to mint. Thanks guys!',
      stars: 5,
      purchased_on_renoun: true  
  })

  InstrumentReview.create!({
    instrument_name: 'Fender Telecaster',
    reviewer_name: 'Gerald E.',
    title: 'Buy One',
    body: 'This tele got so many American appointments you would swear its a American elite telecaster guitar is awesome anyone not sure on American telecaster try this Nashville telecaster Mexican you wont regret it......',
    stars: 5,
    purchased_on_renoun: true  
})

InstrumentReview.create!({
  instrument_name: 'Fender Telecaster',
  reviewer_name: 'Christopher K',
  title: "I'm in LOVE!",
  body: "All I can say is that I'm in love. I've waited my life for this! fender, Set neck , organic archtop, binding and SD pickups push/ pull hum/sing and for what? I cant remember but I think $500. Get one! I'm getting another one in nat . It's a screamer though not as Fender-ish as you would think. This thing howells! And everything comes through. Had to really clean up my act.",
  stars: 5,
  purchased_on_renoun: true  
})

InstrumentReview.create!({
  instrument_name: 'Fender Telecaster',
  reviewer_name: 'Colin J.',
  title: "Great Guitar at this price",
  body: "Very well built. Surprisingly high quality at this price and being built in Indonesia. A very comfortable feel and fast neck. The nut needed a touch of filing (it was binding up and hard to tune), and some small adjustments to the intonation, and that was it all it needed from the factory. Action was perfect, neck was straight. The pickups are beautiful played clean, and respond well to compression. There’s a nice even response across low-high frequencies. This would be an awesome sound for rhythm playing. I bought it for the humbuckers. I’m not much for pull pots that split the coil. These sound pretty good and I will use the setting sometimes, but in my opinion it doesn’t replace dedicated single coils. Also, at high gain these pickups are kind of fizzy and don’t have a very pleasant resonance. Backing off the tone knob got me a better high gain tone, but it’s kind of small. I may replace them. I would also note that the guitar is made of nato, not mahogany as listed on the Fender website. Nato is a cousin of mahogany. It isn’t the same density, so the guitar is lighter. It has great sustain anyway, but maybe that’s also why it sounds a bit small and doesn’t resonate like I expected at high gain. ",
  stars: 4,
  purchased_on_renoun: true  
})

InstrumentReview.create!({
  instrument_name: 'Fender Telecaster',
  reviewer_name: 'Michael L.',
  title: "Like it",
  body: "Very nice axe. Love the Pearly gates bridge pickup. Stays in turn. 11-49. Feel right",
  stars: 5,
  purchased_on_renoun: true  
})


InstrumentReview.create!({
  instrument_name: 'Fender Telecaster',
  reviewer_name: 'Chuck C.',
  title: "Fantastic Guitar",
  body: "I've had them all, LP's, Rickenbacker, Fender, ES 335 & 339's, PRS, Gretch, SG , G&L, and there is nothing that sounds as good right out of the box as this guitar. (IMO). I can't put it down, sweet and hot just a great sound and good workmanship. I could complain a little about the shape of the neck but the playability and sound are just awesome",
  stars: 5,
  purchased_on_renoun: false  
})

InstrumentReview.create!({
  instrument_name: 'Gibson SG',
  reviewer_name: 'Tom T.',
  title: "SG",
  body: "The sg was one of the only guitars I haven’t tried ... when u finally get the beast in tune it is a monster through my orange practice amp...I was totally put off by numerous les Paul’s.. too heavy and weight issues ... the studio t and the Studio lite is a mucky tone... the standard is the way to go but I’m constantly amazed at how jimmy page threw his around and rocked it for all it had...Tom ",
  stars: 4,
  purchased_on_renoun: false  
})

InstrumentReview.create!({
  instrument_name: 'Gibson SG',
  reviewer_name: 'Terry P.',
  title: "100% Made to Play",
  body: "Wowwwww..a very mean machine whether it's dirty or clean!! And I don't understand how Gibson can pour this much guitar into a single instrument, at this price range. I am blown away at the quality. Not to mention, it sounds killer. This was my first SG, and I am not disappointed in any way. The playability is outstanding, and my model arrived perfectly intonated with sweet low action. Fret access is great and the 490's kick some butt. Nuthin' but love here. ",
  stars: 5,
  purchased_on_renoun: true  
})

InstrumentReview.create!({
  instrument_name: 'Fender Stratocaster',
  reviewer_name: 'Chris F.',
  title: "A Winner For Sure",
  body: "I have several strat type guitars but had, up to now, shied away from investing in the big F, unwilling to pay a premium for the name. Having been aware of the release of this significant upgrade to the Player series I compared the original Player, Player Plus and US made Performer. Whilst the Player was pretty good, the Plus won out on the superbly comfortable neck (rolled edges really do make a difference). Add in locking tuners, 7 possibilities of pickup selection (thanks to the push / pull tone knob) and flat saddles ( no more scrapes on my picking hand + possibility of using pressure to obtain some vibrato without needing to use the whammy bar) .... oh, and noiseless pickups .... this was getting seriously good. Surely though, the Performer will offer something over & above this for the additional cost? Well, no, not for me at least. The clincher was that the Performer comes with Jumbo frets as opposed to the Medium Jumbo frets of the Player Plus. For me Jumbo Frets are akin to the feeling you get when you drive over a rumble strip when approaching a roundabout. Just can't get on with them. How does it sound? It has a 'transparent' quality allowing pedals & amp in the chain to easily shape the tones I am looking for. Remember, if you put rubbish in you'll get rubbish out! Fender have pulled one out of the hat here and it deserves your attention if looking for a versatile strat at a sensible price.",
  stars: 5,
  purchased_on_renoun: true  
})

InstrumentReview.create!({
  instrument_name: 'Fender Stratocaster',
  reviewer_name: 'Vincent R.',
  title: "Great Guitar",
  body: "This Strat looks and sounds super! The Tequila Sunrise finish is awesome. The cool Fender gig bag is a nice bonus. Still can't find any blemish in/on the back. Good price too (didn't pay full retail). A fantastic guitar at any price!",
  stars: 5,
  purchased_on_renoun: true  
})




    puts "Done!"
  # end
