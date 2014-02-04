PSD["child_image_1"].y=0
PSD["child_image_2"].y=0
PSD["child_image_3"].y=0

	PSD["child_image_1"].visible=false
	PSD["child_image_2"].visible=false
	PSD["child_image_3"].visible=false

// Header animation
PSD["HEADER"].on("click", function(){
	PSD["HEADER"].scale = .5
	PSD["HEADER"].animate({
		properties: {scale:1},
		curve:"spring(300,10,500)"
	})
}) 

// transform child_image(s) to orignal position & opacity on click of parent
PSD["Image"].on("click", function(){
	// Animate Image
	PSD["Image"].scale = .75
	PSD["Image"].animate({
		properties: {scale:1},
		curve:"spring(300,10,500)"
	})
	// transform child_image_1
	PSD["child_image_1"].visible=true;
	PSD["child_image_1"].animate ({
		properties: {y:220},
		time: 1000,
		curve:"spring(300,10,300)"
	})
	// transform child_image_2
	PSD["child_image_2"].visible=true;
	PSD["child_image_2"].animate ({
		properties: {y:430},
		time: 1000,
		curve:"spring(300,10,300)"
	})
	// transform child_image_3
	PSD["child_image_3"].visible=true;
	PSD["child_image_3"].animate ({
		properties: {y:640},
		time: 1000,
		curve:"spring(300,10,300)"
	})
}) 

// child_image click animation
PSD["HEADER"].on("click", function(){
	PSD["HEADER"].scale = .5
	PSD["HEADER"].animate({
		properties: {scale:1},
		curve:"spring(300,10,500)"
	})
}) 
