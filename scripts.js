$( document ).ready(function() {
    

    console.log( "ready!" );
<<<<<<< HEAD
    
=======
    patient();
>>>>>>> 2d51b898ae728421b2df4ad29422afe674ca2258
    textCheckboxTrigger();

    simpleScoringModel('#problem', '#problem input[type="text"]', '#problem_score');

    simpleScoringModel('#hpi_validate', '#hpi_validate input', '#hpi_score');

    simpleScoringModel('#pfsh-form', '#pfsh-form textarea', '#pfsh_score');

    checkboxScoringModel('#data-reviewed', '#data-reviewed input', '#data_score');

    selectScore('#risk', '#risk_score');
});


// $("#next-section-history a").on('click', function (){ 
// 	$('html, body').animate({scrollTop: $('#history-section').offset().top }, 750); 
// });

$("#next-section-history a").click(function() {
    $('html, body').animate({
        scrollTop: $("#history-section").offset().top
    }, 750);
});

<<<<<<< HEAD

=======
function patient(){
	$("#est-new-patient button").on('click', function(){
		$("#est-new-patient button").removeClass('clicked');
		$(this).addClass('clicked');
		$("#patient_status").html( $(this).html() );
	})
}
>>>>>>> 2d51b898ae728421b2df4ad29422afe674ca2258
function addInput(elem, type){
	parent = $(elem).parent();
	sibling = $(parent).find('input[type="'+ type +'"]');
	newInput = '<input type="' + type + '" class="' + sibling.attr('class') + '">';
	$(parent).append(newInput);
}

function simpleScoringModel(container, group, echo){
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



function checkboxScoringModel(container, group, echo){
	//on keyup for any input in a defined group(container)...
	$(container).on('click', function(){
		//set a variable to track score
		score = 0
		//iterate through inputs in the group (group)
		$(group).each(function(){
			//if the input has any value (not blank)
			if($(this).is(':checked')){
				//increment the variable
				score++;
			}
		})
		//after calculating total, echo the result to the document (echo)
		$(echo).html( score );
		$(echo).attr('data-score', score);
	})
}

// to use this function to auto-check checkboxes with associated text input, just add the textCheckbox class to the direct parent container
function textCheckboxTrigger(){
	$('.textCheckbox textarea, .textCheckbox input').on('keyup', function(){
		if( $(this).val().length ){
			$(this).parent('.textCheckbox').find('input[type="checkbox"]').prop('checked', true);
		} else {
			$(this).parent('.textCheckbox').find('input[type="checkbox"]').prop('checked', false);
		}
	})
}

function selectScore(select, echo){
	$(select).on('change', function(){
		$(echo).html($(this).val());
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






