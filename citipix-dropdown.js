$(document).ready(function() {
	console.log("ready!");

	// const $dd = $(".drop-down");

	// ["NYC", "SF", "LA", "ATX", "SYD"]
	// .forEach(city => {
	// 	$dd.append( "<option>" + city + "</option>" );
	// });

	// $dd.change(function(e){
	// 	$("body").attr("class", $(this).val().toLowerCase());
	// });



	// when input in search bar trigger event listener 


	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// $(".drop-down").append( "<option>NYC</option>" );

 	for (var i = 0, length = cities.length; i < length; i++) {
 		$(".drop-down").append( "<option>" + cities[i] + "</option>" );
 	}

	$(".drop-down").change(function(e){
		e.preventDefault();
		
		// capture the city the user inputs 
		
		var userCity = $(this).val().toLowerCase();

		var brickWall;

		// If a user enters "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		
		if (userCity === "new york" || userCity === "new york city" || userCity === "nyc") {
			brickWall = "nyc";
		}

		
		// If a user enters "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		
		else if (userCity === "san francisco" || userCity === "sf" || userCity === "bay area") {
			brickWall = "sf";
		}
		
		// If a user enters "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		
		else if (userCity === "los angeles" || userCity === "la" || userCity === "lax") {
			brickWall = "la";
		}

		// If a user enters "Austin" or "ATX" make the background of the page austin.jpg
		
		else if (userCity === "austin" || userCity === "atx") {
			brickWall = "austin";
		}

		// If a user enters "Sydney" or "SYD" make the background of the page sydney.jpg

		else if (userCity === "sydney" || userCity === "syd") {
			brickWall = "sydney";
		}
		// If user enters an invalid city display error msg 

		if (brickWall) {
			$("body").attr("class", brickWall);
		} else {
			alert('HEY STUPID!');
		}


	});
});

