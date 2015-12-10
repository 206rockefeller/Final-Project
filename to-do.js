//variables
	// var Count = 0

//Event handling 

//on input submit add item 
// $('selector').on('blur' , addListItem)

// $('#formItem').on('submit' , 'addListItem');

$('#formItem').on('submit',addListItem);

$('#clear').on('click', clearList);

// When an edit link is clicked, go into edit mode
$('#todos').on('click', '.edit', editItem);

// When an item editor is submitted, save the changes
$('#todos').on('submit', '.editor', saveItem);











//ADD To Do List Item

	//select the input 
	//get the value 
	//create some list item 
	//display value in the list item 
	//append (add) the item to the To Do List 



function addListItem(event) {

    event.preventDefault();
    var newitem = $('#newItem').val();
    $('#todos').append('<li class="task-item">'+newitem+'<input type="button" value="edit" class="edit"/><input type="button" value="remove" class="remove"/></li> ');

}

//Edit To Do List Item 

function editItem(event) {

	event.preventDefault();
	// Get the text of the to-do item; it's a sibling of the clicked link
	var itemText = $(this).parent().text();
	// Get the parent <li>
	var listItem = $(this).parent();

	// Replace the parent <li> contents with an edit form
	listItem.html('<form class="editor"><input value="' + itemText + '"></form>');

	// Focus the keyboard on the input that was just added
	listItem.find('input').focus();

}

	//select the list item 


	//replace the text (span or p tag) with an input box 
	//save the value of the text and store in the input box
	//give focus to the input box 



//Save our edited To List Item 

	//enter 
	//get value of input 
	//save it as new text in list 

function saveItem(event) {

	event.preventDefault();

	// Get the new text from the editor 
	var itemText = $(this).children('input').val();

	// Get the parent <li>
	var listItem = $(this).parent();

	// Replace the parent <li> contents with the updated item and controls
	listItem.html('<li class="task-item">'+ itemText +'<input type="button" value="edit" class="edit"/><input type="button" value="remove" class="remove"/></li> ');


}





//Mark To Do List Item complete     add CSS class

	//select the item 
	//add css line-through class


//Remove To Do List Item 

$(document).on('click', '.remove', function() {
	$(this).closest('.task-item').remove();
});

	//select the item 
	//select the item 

//Count number of items on To Do List 

	//update the counter   (will be inside majority of other functions the add and remove sections)
	//select the actual counter and update it's value 

//Clear To Do List 

function clearList() {

	// $('input').click(function() 

	$('#todos li').remove();
}

	//select the list 
	//delete the list 


//Clear Completed Items from To Do List 

	//select the to-do list items
	//check for completed list items
	//if it's been completed remove from the list 

//
