note = new Note();
ul = document.createElement('ul');
document.getElementById('myListDiv').appendChild(ul);
var index = 0


function printList() {
  notes = note.listNotes();
  last_note = notes[notes.length - 1];
  var li = document.createElement('li');
  var a = document.createElement('a');

  li.setAttribute('class', index)
  a.setAttribute('id', index)
  a.setAttribute('onclick', 'expandNote(event.target.id);')
  ul.appendChild(li);
  li.appendChild(a);
  a.innerHTML= last_note;
  // document.getElementById(index).textContent = last_note
  index ++
};
if(note.notes.length > 0){
printList();}

function expandNote(index) {

  document.getElementById('fullNote').innerHTML= note.grab(index)
  var x = document.getElementById('frontPage');
  x.style.display = "none";
  var y = document.getElementById('secondPage');
  y.style.display = "block";
}

function goBack() {
  var x = document.getElementById('frontPage');
  x.style.display = "block";
  var y = document.getElementById('secondPage');
  y.style.display = "none";

}
