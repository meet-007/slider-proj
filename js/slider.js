
		var i=1	
		setInterval(function(){
			
			$(".slider").html("<img src='images/image"+i+".jpg' class='w3-animate-left'/>");
			i++;
			if(i==6){
				i=1;
			}
		},2500);
	
