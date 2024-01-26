# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

owner1 = Owner.create(username: "teapot", password: "pass121", city:"Austin", zipcode: "78702")
owner2 = Owner.create(username: "blank", password: "pass122", city: "Cedar Park", zipcode: "78703")
owner3 = Owner.create(username: "vao", password: "pass123", city: "Austin", zipcode:"78708")
owner4 = Owner.create(username: "faker", password: "pass124", city: "Roundrock", zipcode:"78702")
owner5 = Owner.create(username: "fred", password: "pass125", city: "Austin", zipcode:"78702")

dog1 = Dog.create(owner_id: owner1.id, name: "Sprinkles", age:"Puppy", breed:"Pomeranian", gender: "female", size:"small", description:"Cute puppy who loves to play fetch!", image: "https://image.petmd.com/files/styles/978x550/public/2022-10/pomeranian.jpeg")
dog2 = Dog.create(owner_id: owner1.id, name: "Maxine", age:"Puppy", breed:"Labrador Retriever", gender: "female", size:"xlarge",  description:"Chases the ball everywhere!", image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAxMjg4MjkxNjI5MTQ3Njc1/labrador-retriever-guide.jpg")
dog3 = Dog.create(owner_id: owner1.id, name: "Sherbert", age:"Adult", breed:"Pomeranian", gender: "male", size:"small", description:"A bit shy", image: "https://www.dailypaws.com/thmb/MGYnlOlOgW-14ZBI0ouXKJuQWeE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pomeranian-white-puppy-921029690-2000-3ca2fdb56d144450a05c6990efdfd40e.jpg")
dog4 = Dog.create(owner_id: owner2.id, name: "Charles", age:"Senior", breed:"German Shepard", gender: "male", size:"xlarge", description:"Loves finding sticks!", image: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg")
dog5 = Dog.create(owner_id: owner3.id, name: "Snickers", age:"Senior", breed:"Australian Shepard", gender: "male", size:"large", description:"A pup who just wants to nap all day", image: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg")
dog6 = Dog.create(owner_id: owner3.id, name: "Bella", age:"Adult", breed:"Pug", gender: "female", size:"small", description:"Pandemic doggie who never quite grew up", image: "https://www.thesprucepets.com/thmb/uGmlpsHI5-bvwhCIONeZDUtKfjc=/3600x0/filters:no_upscale():strip_icc()/pug-dog-breed-profile-1117989-03-54468a9b49ad4a3abc2da72ed879fc43.jpg")
dog7 = Dog.create(owner_id: owner4.id, name: "Cookie", age:"Adult", breed:"Corgie", gender: "female", size:"medium", description:"Lovable goofball", image: "https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg")
dog8 = Dog.create(owner_id: owner5.id, name: "Ginger", age:"Puppy", breed:"Shih tzu", gender: "female", size:"small", description:"Always has the zoomies", image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/11/shih-tzu-temperament.jpeg.jpg")
dog9 = Dog.create(owner_id: owner5.id, name: "Spot", age:"Adult", breed:"Labrador Retriever", gender: "female", size:"large", description:"Loves to go on walks", image: "https://www.metrovetchicago.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=pPY89VWI")
dog10 = Dog.create(owner_id: owner5.id, name: "Manny", age:"Senior", breed:"Corgie", gender: "male", size:"medium", description:"Jumps everywhere!", image: "https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg")

playdate1 = Playdate.create!(owner_id: owner1.id, location: "Northwood Estate Dog Park", date: "2024-02-20", time: "09:30 AM", size_limit:"small", age_limit:"Puppy", playdate_size_limit: 5)
playdate2 = Playdate.create(owner_id: owner2.id, location: "Northwood Estate Dog Park", date: "2024-02-14", time: "09:30 PM", size_limit:"none", age_limit:"Senior", playdate_size_limit: 10)
playdate3 = Playdate.create(owner_id: owner5.id, location: "Domain Central Bark", date: "2024-02-01", time: "10:30 AM", size_limit:"large", age_limit:"Adult", playdate_size_limit: 3)
playdate4 = Playdate.create(owner_id: owner4.id, location: "Northwood Estate Dog Park", date: "2024-02-07", time: "06:30 PM", size_limit:"none", age_limit:"none", playdate_size_limit: 20)
playdate5 = Playdate.create(owner_id: owner4.id, location: "Dog Park Blue", date: "2024-02-29", time: "11:30 AM", size_limit:"medium", age_limit:"Adult", playdate_size_limit: 5)

rsvp1 = Rsvp.create!(dog_id: dog1.id, playdate_id: playdate1.id, note: "Excited to meet everyone!")
rsvp2 = Rsvp.create(dog_id: dog8.id, playdate_id: playdate1.id, note: "Woof woof!")
rsvp3 = Rsvp.create(dog_id: dog4.id, playdate_id: playdate2.id, note: "Who's bringing the balls?")
rsvp4 = Rsvp.create(dog_id: dog5.id, playdate_id: playdate2.id, note: "Has everyone been to a playdate before?")
rsvp5 = Rsvp.create(dog_id: dog10.id, playdate_id: playdate2.id, note: "Excited to meet everyone!")
rsvp6 = Rsvp.create(dog_id: dog9.id, playdate_id: playdate3.id, note: "Can't wait!")
rsvp7 = Rsvp.create(dog_id: dog2.id, playdate_id: playdate4.id, note: "I love this!")
rsvp8 = Rsvp.create(dog_id: dog3.id, playdate_id: playdate4.id, note: "Let's go!")
rsvp9 = Rsvp.create(dog_id: dog5.id, playdate_id: playdate4.id, note: "The day can't come fast enough!")
rsvp10 = Rsvp.create(dog_id: dog7.id, playdate_id: playdate4.id, note: "So excited to socialize my pup!")
rsvp11 = Rsvp.create(dog_id: dog10.id, playdate_id: playdate4.id, note: "What's the easiest way to get there?")
rsvp12 = Rsvp.create(dog_id: dog7.id, playdate_id: playdate5.id, note: "Do you think it might rain that day?")

comment1 = Comment.create!(owner_id: owner1.id, playdate_id: playdate1.id, text: "I'm so excited for this event!")
comment2 = Comment.create(owner_id: owner5.id, playdate_id: playdate1.id, text: "My dog has been wagging his tail in excitment")
comment3 = Comment.create(owner_id: owner5.id, playdate_id: playdate1.id, text: "Any concerns about the weather?")
comment4 = Comment.create(owner_id: owner1.id, playdate_id: playdate1.id, text: "I think it should be fine!")
comment5 = Comment.create(owner_id: owner5.id, playdate_id: playdate1.id, text: "Great!")
comment6 = Comment.create(owner_id: owner2.id, playdate_id: playdate1.id, text: "Anyone checked the weather?")
comment7 = Comment.create(owner_id: owner2.id, playdate_id: playdate1.id, text: "I think it might rain")
comment8 = Comment.create(owner_id: owner3.id, playdate_id: playdate1.id, text: "No worries, the weather channel says bright and sunny!")
comment9 = Comment.create(owner_id: owner2.id, playdate_id: playdate1.id, text: "Great!")
comment10 = Comment.create(owner_id: owner2.id, playdate_id: playdate1.id, text: "I'll bring tennis balls!")
comment11 = Comment.create(owner_id: owner5.id, playdate_id: playdate1.id, text: "Manny can't wait to meet everyone!")
comment12 = Comment.create(owner_id: owner5.id, playdate_id: playdate3.id, text: "Hope some others are able to come!")
comment13 = Comment.create(owner_id: owner5.id, playdate_id: playdate4.id, text: "Weather looks great!")
comment14 = Comment.create(owner_id: owner1.id, playdate_id: playdate4.id, text: "Both my dogs are excited to join!")
comment15 = Comment.create(owner_id: owner4.id, playdate_id: playdate4.id, text: "My dog loves the dog park!")
comment16 = Comment.create(owner_id: owner4.id, playdate_id: playdate4.id, text: "Especially when other dogs are there")
comment17 = Comment.create(owner_id: owner3.id, playdate_id: playdate4.id, text: "So glad the park won't be empty for once")
comment18 = Comment.create(owner_id: owner5.id, playdate_id: playdate4.id, text: "I agree, the more dogs the better!")
comment19 = Comment.create(owner_id: owner4.id, playdate_id: playdate4.id, text: "Weather looks great this day!")