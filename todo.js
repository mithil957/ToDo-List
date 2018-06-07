$('ul').on('click','li',function(){
	$(this).toggleClass('completed') 
})

//action for click on 'X'
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){$(this).remove()}) //removes the li b/c its the parent of the span, fades out element and then removes it
	event.stopPropagation() //stops the event from bubbling
})


$('input[type="text"]').keypress(function(event){
	if(event.which === 13){//check for key code 13, which is the Enter key
		var task = $(this).val()
		
		if(!(!task || /^\s*$/.test(task))){ //checks to see if an empty string is entered
			$('ul').append('<li><span><i class="far fa-trash-alt"></i></span> '+ task+'</li>')	//adds html to 'ul'	
		}
		$(this).val('') //turns the text field to an empty string
	}
})