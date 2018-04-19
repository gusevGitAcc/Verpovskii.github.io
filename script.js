$(document).ready(function() {
	var visibility = false;

	$("#nick").hover(function(){
		$("#nick").html("I'm not a iOS developer ;)");
	})
	$("#nick").mouseout(function(){

		$("#nick").html("I'm a iOS developer.");
 	});

	var temp;
 	$(".material-icons").click(function(){
 		if(visibility) {
 			$("#name").html(temp);
 			$("#nick").hover(function(){
				$("#nick").html("I'm not a iOS developer ;)");
			})
			$("#nick").mouseout(function(){

				$("#nick").html("I'm a iOS developer.");
		 	});

 			$("#subname").html("OF THE FULLSTACK DEVELOPER");

 			$(".material-icons").html("airplanemode_active");
 			visibility = false;
 		}
 		else{
 			temp = $("#name").html();
 			$("#name").html("<a href='https://t.me/MrEmper0r' style='text-decoration: none'>@SHJSTSPC</a>");
 			$("#subname").html("<a href='https://https://github.com/wooooozzzyy'>profile</a>");
 			$("#subname").append(" - <a href='https://github.com/wooooozzzyy/Verpovskii.github.io'>repo</a>")
 			$("#subname").append(" - <a href='https://github.com/sofiazakharova/SofiaZakharova.github.io/wiki'>wiki</a>")
 			$(".material-icons").html("airplanemode_inactive");
 			visibility = true;
 		}
 	})
