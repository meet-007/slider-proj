
$(document).ready(function(){
	var i=1;
	$("#add-btn").click(function(){
		var task = $("#task").val();
		var html = "<tr id=index_'"+i+"'><td>"+i+"</td><td>"+task+"</td><td><div class='edit'><a href='#'>edit</a></div> <a href='#'>delete</a></td></tr>";
		$("#list").append(html);
		i++;
	});
	$("a").click(function(event){
		var row = $(this).parents("tr");
		var col = $(row).nth-child(2);
		alert(col.html());
		event.preventDefault();
	});
});