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
