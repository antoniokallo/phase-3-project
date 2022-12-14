puts "Creating users"
User.create(username: "bob", password: "abc123")
User.create(username: "fred", password: "abc123")
User.create(username: "jeff", password: "abc123")
User.create(username: "george", password: "abc123")

puts "Creating cars"
Car.create(engine_name:"Supercharged 5.2-Liter V8: A Predator", type:"engine",price: 0,imgURL:"https://fordauthority.com/wp-content/uploads/2019/08/2020-Shelby-GT500-Engine-Details-007.jpg")
Car.create(engine_name:"High Output Turbocharged 6.7-Liter Inline-Six", type:"engine", price: 0,imgURL:"https://bioage.typepad.com/.a/6a00d8341c4fbe53ef022ad3cfa516200b-550wi")
Car.create(engine_name:"SKYACTIV-G 2.0-Liter Inline-Four", type:"engine",price: 0,imgURL:"http://australiancar.reviews/_images2/reviews/mazda_skyactivg20_engine_ser1_01.jpg")

Car.create(wheel_name:"20-inch Tire-set",type:"wheel",price: 899, imgURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61PXttM6xML._AC_SX679_.jpg")
Car.create(wheel_name:"21-inch Tire-set",type:"wheel",price: 1099, imgURL: "https://cdn.shopify.com/s/files/1/1724/5219/products/tesla-model-s-3-x-y-21-inch-forged-aftermarket-wheel-tire-package-114-matte-black_4000x@3x.progressive.jpg?v=1653067901")
Car.create(wheel_name:"32-inch Tire-set",type:"wheel",price: 1399, imgURL: "https://www.motoxmall.com/images/virtuemart/product/moto-ravage-all-terrain-tire-wheel-kit-14.jpg")

Car.create(rim_name: "Anovia Elder", type:"rim",price: 999,imgURL:"https://images.customwheeloffset.com/wheels-compressed/anovia/elder/elder_brushedapollosilver_left_white.jpg")
Car.create(rim_name: "Work Emotion D9R",type:"rim", price: 1099,imgURL:"https://images.customwheeloffset.com/wheels-compressed/work/emotiond9r/emotiond9r_white_white.jpg")
Car.create(rim_name: "Enkei RPF1",type:"rim", price: 899,imgURL:"https://enkei.com/wp-content/uploads/2019/12/ENKEI-RPF1-BK-132-WEB.jpg")

Car.create(Spoiler_name: "Wing spoiler", type:"spoiler",price: 399. imgURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61FIcC3MnkL._AC_SX679_.jpg")
Car.create(Spoiler_name: "Duck-Tail spoiler", type:"spoiler", price: 499. imgURL: "https://www.driftshop.com/media/catalog/product/0/3/7/8/4/8/large-ducks13-2.jpg")
Car.create(Spoiler_name: "Pedestal spoiler", type:"spoiler", price: 285. imgURL: "https://www.evasivemotorsports.com/mm5/graphics/00000001/anderson/AC-RS15FDMU-AT-GF_01_640x640.jpg")

Car.create(body_name:"G86 Body", type:"body",price: 29999,imgURL:"https://ic.carid.com/duraflex/items/112646-oncar-01_6.jpg")
Car.create(body_name:"Supra MK:V", type:"body",price: 59999,imgURL:"https://cdn-ds.com/blogs-media/sites/232/2019/04/23151839/2020-Toyota-Supra-Renaissance-Red-2.0_o.jpg")
Car.create(body_name:"Camry", type:"body",price: 12999,imgURL:"https://www.kindpng.com/picc/m/348-3482956_toyota-camry-toyota-camry-2019-singapore-price-hd.png")

puts "creating website"
Website.create(car_id: Car.all.sample.id, user_id:User.all.sample.id)