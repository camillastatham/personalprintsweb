//selecting the size for the canvas


$('select').on('change', function () {

	//finding the correct image/jpg
	var img = 'images/' + $(this).val();
	
//showing the correct jpg in the box
	$('#preview').attr('src',img);
	
});