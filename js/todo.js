
$(document).ready(function(){
	var i=1,edit,complete_no=0;
	$("#update-btn").hide();
	$("#add-btn").click(function(){
		if($("#task").val() == ""){
			alert("fill up task into text box");
		}else{
			var task = $("#task").val();
			var html = "<tr id='index_"+i+"''><td>"+i+"</td><td><input type='checkbox' class='chk'/></td><td>"+task+"</td><td><input type='button' value='edit' class='edit-btn btn btn-default'/> <input type='button' class='delete-btn btn btn-default' value='delete'/></td></tr>";
			$("#list").append(html);
			i++;
		}
	}); 
	$("#list").on("click", ".edit-btn",function(){
		
		//var col = $(row).nth-child(2);
		var edit_task = $(this).parent().prev().html();
		$("#task").val(edit_task);
		edit =  $(this).parent().parents("tr").attr("id");
		//var edit = row_id.split("_");
		alert("edit id is "+edit);
		$("#update-btn").show();
		$("#add-btn").hide();
	});
	$("#update-btn").click(function(){
		var tr  = $("#"+edit).children();
		$(tr[2]).html($("#task").val());
		$("#update-btn").hide();
		$("#add-btn").show();
		alert("value updated at"+edit);
	});
	$("#list").on("click", ".delete-btn",function(){
		 $(this).parent().parents("tr").hide();
	});
	$("#list").on("change", ".chk",function(){
		complete_no++;
		var completed_task = $(this).parent().next().html();
		var html = "<tr><td>"+complete_no+"</td><td>"+completed_task+"</td></tr>";
		$("#list-completed").append(html);
		var col_in_row = $(this).parent().parents("tr").children();
		var last_col = $(col_in_row[$(col_in_row).length-1]);
		$(last_col).find(".delete-btn").click();
	});
});	