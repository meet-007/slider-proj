		$(document).ready(function(){
			$(".slider-img").hide();
			var flag=true;
			var i=1	
			$(".left-btn").click(function(){
				i=i-1;
				if(i<1){
					i=$(".slider-img").length;
				}
				$(".slider-img:nth-child("+i+")").removeClass("w3-animate-right");
				
				
			});
			$(".right-btn").click(function(){
				i=i+1;
				if (i>$(".slider-img").length&&flag)
  			 	{
  			 		i = 1;
  			 	}
				$(".slider-img:nth-child("+i+")").addClass("w3-animate-right");
				
			});
	setInterval(function(){
			$(".slider-img").hide();
			if (i>$(".slider-img").length&&flag)
  			 {
  			 	i = 1;
  			 }
			if(i<1){
				i=$(".slider-img").length;
			}
			$(".slider-img:nth-child("+i+")").show();
			},2500);
		
	});
	
