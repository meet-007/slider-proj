$(document).ready(function(){
	var i=1,k=0;
	var image = [];
	
	$("#add-btn").click(function(){
			/*var task = document.getElementById("task");
			/*if ('files' in task) {
    			/*if (task.files.length == 0) {
        			console.log("select one or more files.");
    			} else {
		        	for (var j = 0; j < task.files.length; j++) {
		        		var file = task.files[j];
		        		var filename;
			            if ('name' in file) {
			                filename = file.name;
			            }*/
			            var html1 ;
			            var filelist = $("#task").prop('files');
			             var reader  = new FileReader();
			             var file = filelist[0];
			            
  						reader.onload  = function(event) {
    					//preview.src = reader.result;

    					html1 = "<div class='slider-img' id='img_"+k+"'><img src='"+reader.result+"'/></div>";
    					$(".slider").prepend(html1);
 						 };
  						 reader.readAsDataURL(file);
						var html = "<tr id='index_"+k+"'><td>"+k+"</td><td>"+file.name+"</td><td><input type='button' class='delete-btn btn btn-default' value='delete'/></td></tr>";
						$("#list").append(html);
						image[k]=file;
				
						k++;
					
					
				/*	
				}
			}*/
	});
	$("#list").on("click", ".delete-btn",function(){

		 var idOfRow = $(this).parent().parents("tr").attr("id");
		 var index = idOfRow.split("_");
		 $(this).parent().parents("tr").hide();
		 image.splice(index,1);
		 $("#img_"+index[1]).remove();
	});
	setInterval(function(){
			if($(image).length<=0){
				$(".no-img-msg").show();
				$(".slider").hide();
			}else{
				$(".no-img-msg").hide();
				$(".slider").show();
			}
			
			if (i>$(".slider-img").length)
  			 {
  			 	i = 1;
  			 }
			if(i<1){
				i=$(".slider-img").length;
			}
			$(".slider-img").hide();
			//$(".slider-img:nth-child("+i-1+")").fadeOut("slow");
			//$(".slider-img:nth-child("+i+")").fadeIn("slow");
			$(".slider-img:nth-child("+i+")").fadeIn(	);
			  i++;
  			
			},2800);
});