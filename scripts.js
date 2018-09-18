$( document ).ready(function() {
    

    console.log( "ready!" );

    SimpleScoringModel('#problem', '#problem input[type="text"]', '#problem_score');

    SimpleScoringModel('#hpi_validate', '#hpi_validate input', '#hpi_score');

    SimpleScoringModel('#pfsh-form', '#pfsh-form textarea', '#pfsh_score');
});


// $("#next-section-history a").on('click', function (){ 
// 	$('html, body').animate({scrollTop: $('#history-section').offset().top }, 750); 
// });

$("#next-section-history a").click(function() {
    $('html, body').animate({
        scrollTop: $("#history-section").offset().top
    }, 750);
});


function addInput(elem, type){
	parent = $(elem).parent();
	sibling = $(parent).find('input[type="'+ type +'"]');
	newInput = '<input type="' + type + '" class="' + sibling.attr('class') + '">';
	$(parent).append(newInput);
}

function SimpleScoringModel(container, group, echo){
	//on keyup for any input in a defined group(container)...
	$(container).on('keyup', function(){
		//set a variable to track score
		score = 0
		//iterate through inputs in the group (group)
		$(group).each(function(){
			//if the input has any value (not blank)
			if($(this).val().length){
				//increment the variable
				score++;
			}
		})
		//after calculating total, echo the result to the document (echo)
		$(echo).html( score );
		$(echo).attr('data-score', score);
	})
}




function HPI_Model(){
	//on keyup for any input in a defined group...
	$('#hpi_validate input').on('keyup', function(){
		//set a variable to track score
		hpi_score = 0
		//iterate through inputs in the group
		$('#hpi_validate input').each(function(){
			//if the input has any value (not blank)
			if($(this).val().length){
				//increment the variable
				hpi_score++;
			}
		})
		//after calculating total, echo the result to the document
		$('h1#hpi_score').html('hpi score: ' + hpi_score );
	})
}






