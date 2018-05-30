function Note(){
  this.notes = [];
};

Note.prototype.add = function(text){
  this.notes.push(text);
  console.log(this.notes);
};

Note.prototype.listNotes = function(){
  var list = [];
  console.log(this.notes)
  for (var i = 0; i < this.notes.length; i++){
    list.push(this.notes[i].slice(0, 19));
  };
  return list;
};

Note.prototype.delete = function(index){
  delete this.notes[index];
};

Note.prototype.grab = function(index){
  return this.notes[index];
};
