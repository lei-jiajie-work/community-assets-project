var contents = {
	chinatown : {
		// Photos from me and another source that I forgot, modified using Godot Game engine
		address : "",
		text : "This is Chinatown was established during the early twentieth century. Some challenges the community face are the language barrier, poverty, and violence. The community is mostly homogenous, and a lot of residents speak very little english. This means that they are effectively confined to this area, which means that the jobs they can get are all here and mostly low-paying.",
		image : ["chinatown2.png", "chinatown3.png", "chinatown2.png", "chinatown1.png", "chinatown3.png", "chinatown1.png", "chinatown1.png", "chinatown2.png", "chinatown3.png"]
	},
	pingTomPark : {
		// Wikimedia Torsodog
		address : "44 W 15th St, Chicago, IL, 60605",
		text : "This park is very important to this community and has a long history. It provides a green space for people. It also has a playground and water-taxi stop. The field house is seperated by a railroad. You can go swimming or work out in the field house.",
		image : "https://upload.wikimedia.org/wikipedia/commons/e/e1/Ping_Tom_Park_pavilion_north.jpg"
	},
	johnCharlesHainesElementary : {
		// Stolen from facilitron
		address : "247 W 23rd Pl, Chicago, IL 60616",
		text : "This elementary school is the only CPS schools in this neighborhood. It has a playground that was often used by senior citizens to exercise in the morning in the past.",
		image : "https://d2rzw8waxoxhv2.cloudfront.net/featured/xlarge/hes60616/1631048812081-938-168.jpeg"
	},
	parkToShop : {
		// From Howard L. on yelp
		address : "2425 S Wallace St, Chicago, IL 60616",
		text : "This is where some residents of Chinatown get their groceries. It sells asian goods, which are usually hard to find in America, and it allows the residents to purchase fresh produce, which gives them access to a wide variety of foods.",
		image : "https://s3-media0.fl.yelpcdn.com/bphoto/i-YpuQy5sYdCOiK8y0aMzA/o.jpg"
	},
	saintAnnasBakery : {
		// Photo sourced from David F. on yelp
		address : "2158 S Archer Ave, Chicago, IL 60616",
		text : "Senior citizens come here to eat breakfast and lunch. You can order birthday cakes.",
		image : "https://s3-media0.fl.yelpcdn.com/bphoto/raGtNK-B74WjdacDWw-8Mw/o.jpg"
	},
	chinatownCPL : {
		// Photo from Steven Kevil on wikimedia
		address : "2100 S Wentworth Ave, Chicago, IL 60616",
		text : "This was initially located where the SpringHill Suites/Chinatown Galleria is located today, but was moved in 2015. It provides a space where you can exist without being expected to purchase anything. It allows anyone to access the internet or borrow books for free. Many students come here to do homework after school. They also have naloxone.",
		image : "https://upload.wikimedia.org/wikipedia/commons/b/b0/CPLChinatown04212016.jpg"
	},
	CASLHeadquarters : {
		//https:www.casl.org
		// Photo from Obama's office/ David Katz on wikimedia
		address : "2141 S Tan Ct, Chicago, IL 60616",
		text : "This building was finished in 2004. CASL provides health and human services. Chinese senior citizens often come here for mental health services or for daily workouts.",
		image : "https://upload.wikimedia.org/wikipedia/commons/8/8a/Obama_meets_with_children_at_Chinese_American_Service_League_(CASL)_on_Tuesday%2C_April_13.jpg"
	},
	puiTak : {
		//www.puitak.org/building
		// Photo from Daniel Schwen on wikimedia
		address : "2216 S Wentworth Ave, Chicago, IL 60616",
		text : "This building is almost a century old. It was originally the On Leong Association's building. It was referred to as Chinatown's city hall. Today, it is used by the Chinese Christian Union Church. They provide a variety of serives like disability servies, or adult tutoring.",
		image : "https://upload.wikimedia.org/wikipedia/commons/0/06/Chicago_Chinatown_night.jpg"
	},
	map : {
		address : "",
		text : "",
		image : "https://cityguidetochicago.com/wp-content/uploads/2022/04/Chinatown-Chicago-Map.png"
	}
}

function load(name = "chinatown", arr = false) {
	document.getElementById("content-paragraph").innerHTML = contents[name]["text"];
	document.getElementById("content-address").innerHTML = contents[name]["address"];
	if (arr == true) {
		var image_array = contents[name]["image"];
		var ran = Math.round(Math.random() * (image_array.length - 1));
		document.getElementById("content-image").setAttribute("src", contents[name]["image"][ran]);
	} else {
		document.getElementById("content-image").setAttribute("src", contents[name]["image"]);
	}
}


