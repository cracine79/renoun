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


rickenbacker = Instrument.create!({
  item_name: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Guitar, Fire Glo, 3 Toaster Pickups, Stereo, OHSC 2024',
  condition: 'Brand New',
  price: 3799,
  description: 'Rickenbacker 1993 Plus 12-String Semi-Hollow Electric Guitar, Fire Glo, 3 Vintage-Style Toaster Pickups, Double Binding, Stereo, w/Hardshell Case.  At the request of The Whos Pete Townshend, The 1993 Plus takes Rickenbackers iconic 330 body style and adds an "F"-Hole, Double Body Binding, a Wide Neck, Pearloid Triangle Inlays, 3 Vintage-Style Toaster Pickups, Ric-O-Sound Stereo outs, and a vintage-style trapeze tailpiece. Pete Townshend asked Rickenbacker to upgrade his cherished Model 1993 guitar. The result is the 1993Plus, enhanced with an 1/8-inch wider neck, rosewood fingerboard, and more stable 2-piece neck design with a round heel for increased comfort and upper-fret access. This classic semi-hollowbody 12-string electric guitar is fitted with three vintage reissue Toaster Top single-coil pickups, stereo output, a trapeze tailpiece, vintage knobs, and a proper F-hole. Double body binding and pearlescent inlays add a touch of refinement. X-bracing in the body helps to bring out the rich, full jangle our favorite Rickenbacker 12-strings are famous for.',
  category: 'Guitar',
  brand: 'Rickenbaker',
  model: '1993 Plus',
  shipping: 0,
  seller_id: 6,
  available: true

})

rickenbacker.photo.attach(io: URI.open('https://renoun-seeds.s3.us-east-2.amazonaws.com/Rickenbacker.webp'), filename: 'Rickenbacker.webp')

  
  
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
  

    puts 'creating reviews'

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 5,
      body: 'Billy really knows his stuff when it comes to guitars.  He is a little long winded though, and it can be hard to get him off the phone',
      title: 'Gibson 335',
      stars: 4
    })


    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 5,
      body: 'Overall satisfied, but delivery was longer than expected.',
      title: 'Roland keyboard',
      stars: 3
    })

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 6,
      body: 'Guitar is sweet.  Setup is sweet.  Strings were dirty.  Also it smelled like whiskey.  Im not sure if that is good or bad.',
      title: 'Fender MIM Stratocaster',
      stars: 4
    })


    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 1,
      body: 'Thanks Billy!',
      title: 'Washburn Electric Guitar',
      stars: 5
    })

    SellerReview.create!({
      seller_id: 4,
      reviewer_id: 1,
      body: 'Thanks Billy!',
      title: 'Washburn Electric Guitar',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 2,
      reviewer_id: 1,
      body: 'Pat is such a warm human being, and he really helped me pick out a guitar that matches my socks',
      title: 'Peavey Predator',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 1,
      body: 'Flea sold me a killer bass.  Now I can jam out to RHCP SoCal stylie!',
      title: 'Fender P-bass Lyte',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 8,
      body: 'Seller is pretty shady and hard to get a hold of.  But when the instrument arrived, it was unbelievable, and the price couldnt be beat',
      title: 'PRS SE Mcarty',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 2,
      body: 'Neck was broken when it arrived.  He did refund me my money, but dude could have packed it better.',
      title: 'Tom Delong Fender Stratocaster',
      stars: 2
    })



    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 2,
      body: 'Neck was broken when it arrived.  He did refund me my money, but dude could have packed it better.',
      title: 'Tom Delong Fender Stratocaster',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 7,
      reviewer_id: 4,
      body: 'Flea!!!! You are the dude!  Thank you my brah!',
      title: 'Squier P-Bass',
      stars: 5
    })



    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 1,
      body: "I'll miss you always buddy",
      title: 'Roland Electronic Drum Set',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 4,
      body: "Best seller ever.  Fast, efficient, and totally down to earth.",
      title: 'Gibson SG Standard',
      stars: 5
    })

    SellerReview.create!({
      seller_id: 3,
      reviewer_id: 9,
      body: "If you need guitars, drums, bass, or anything else related to rock and roll, Taylor is the guy to go to.  Trust me you won't regret it.",
      title: 'Dave Grohl Ephiphone Semi-Hollow Electric Guitar',
      stars: 5
    })



    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'I didnt know what kind of guitar to get and the seller really helped walk me through the process. At the end of the day I am satisfied with my purhcase.',
      title: 'Ibanez 7 String',
      stars: 4
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 5,
      body: 'Guitar was on fire when it arrived.  I dig rock and roll, but this is ridiculous',
      title: 'Fender Left Handed Stratocaster',
      stars: 1
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 3,
      body: 'I love this guitar so much I was crying Mary into the wind all night long',
      title: 'Fender American Telecaster',
      stars: 5
    })

    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 4,
      body: 'Seller is crazy.  Sent me three headbands along with the guitar soaked in what I can only assume is some sort of hallucenogen.',
      title: 'Taylor Acoustic Guitar',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'Second time buying a guitar from Jimi.  Hes still got it and the guitar is great.',
      title: 'Fender Jaguar',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 8,
      reviewer_id: 2,
      body: 'I cant stop buying guitars from this guy.  My wife is going to kill me.  Somebody take my credit card away from me.',
      title: 'Fender Paranormal Semi-hollow Telecaster',
      stars: 5
    })


    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 2,
      body: 'Thank you Angus!  This thing is sick!',
      title: 'Gibson SG Candy Apple Red',
      stars: 5
    })

    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 4,
      body: 'Guitar is great.  Seller is polite.  I just dont care for the Satanic references',
      title: 'Flying V Guitar',
      stars: 4
    })


    SellerReview.create!({
      seller_id: 6,
      reviewer_id: 9,
      body: 'Worth every penny',
      title: 'Gibson Slash Les Paul',
      stars: 5
    })




    puts "Done!"
  # end
