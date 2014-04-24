$(document).ready(function () {
	
	var color = "rgb(0, 0, 0)";
	var down = false;
	
	function changeColor(c) {
		switch(c.toString())
		{
			case "rgb(0, 0, 0)": 
			return "red";
			case "rgb(255, 0, 0)":
			return "orange";
			case "rgb(255, 165, 0)": 
			return "yellow";
			case "rgb(255, 255, 0)":
			return "green";
			case "rgb(0, 128, 0)":
			return "blue";
			case "rgb(0, 0, 255)":
			return "purple";
			case "rgb(128, 0, 128)":
			return "rgb(0, 0, 0)";
		}
	};
	
	$(".choice").mousedown(function(){
		color = $(this).css("background-color");
		document.getElementById("frame").style.borderColor=color;
		$(".choice").css('box-shadow', "none");
		$(".choice").css('z-index', "1");
		$(this).css('box-shadow', "0 0 8px 3px " + color);
		$(this).css('z-index', "100000");
		});
	
	$(".box").mousedown(function(){
		$(this).css('background-color', color);
		down = true;
		//alert(c.toString());
	});
	
	$("body").mouseup(function(){
		down = false;
	});
	
	$(".box").on("mouseenter", function () {
		var shadowcolor;
		if(color == "rgb(0, 0, 0)") {
			shadowcolor = "rgb(255,255,255)"
		} else {
			shadowcolor = color;
		}
		$(this).css('box-shadow', "0 0 8px 3px " + shadowcolor);
		$(this).css('z-index', "100000");
		if(down == true) {
			$(this).css('background-color', color);
		}
	});

	$(".main").on("mouseleave", function () {
		down = false;
	});
	
	$(".box").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
		$(this).css('z-index', "1");
	});
			
});