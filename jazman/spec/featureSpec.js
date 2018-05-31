it('starts with no hello world on screen', function(){
  var body = document.getElementById('demo').innerHTML;
  expect(body).toEqual('');
})

it('prints hello world when button clicked', function(){
  document.getElementById("myButton").click();
  var body = document.getElementById('demo').innerHTML;
  expect(body).toEqual('Hello World');
})

document.getElementById('username').value = 'foo';
document.getElementById('login_form').submit();

describe('Entering a new note', function(){
  it("Lists the first part of the note on screen after entry", function(){
    document.getElementById('ourForm').value = 'This is our first note and it is over 20 characters long';
    document.getElementById('ourButton').click();
    var firstListItem = document.getElementByTagName('LI')[0].innerHTML;
    expect(firstListItem).toEqual('This is our first no');
  });
})

// function ClickOn(value){
//   this.value = value
// }
//
// function expect(argument) {
//   return (new Expect(argument));
// }

function clickOn(id){
  document.getElementById(id).click();
};

function fillIn(id, text){
  document.getElementById(id).value = text;
};

function contentOf(id){
  return document.getElementById(id).innerHTML;
};


		<div id="myListDiv"></div>
		<script type="text/javascript">
		var notes = notes.listNotes();
		var ul = document.createElement('ul');
		document.getElementById('myListDiv').appendChild(ul);

		notes.forEach(function(note){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += note;
		});
    </script>
