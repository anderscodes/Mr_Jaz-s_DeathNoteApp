function Note(){
  this.notes = [];
};

Note.prototype.add = function(text){
  this.notes.push(text);
};

Note.prototype.listNotes = function(){
  var list = [];
  for (var i = 0; i < this.notes.length; i++){
    list.push(this.notes[i].slice(0, 19));
  };
  return list;
};

Note.prototype.grab = function(index){
  return this.notes[index];
};

note = new Note();
note.add("hello there mr man how are you today");
note.add("im fine thank you how is tyhe weather are you ok");
note.add("i wonder what the soccer match is like i hope its good");

console.log(note.notes)
console.log(note.listNotes())
