describe('Note', function(){
  var note;
  beforeEach(function(){
    note = new Note();
  })

  it('has a notes array', function(){
    expect(note.notes).toBeEmpty();
  });

  it('should let you add a note', function(){
    note.add("clean kitchen");
    expect(note.notes[0]).toEqual("clean kitchen");
  });

  it('should show a list of your note', function(){
    note.add("sort bills");
    expect(note.listNotes()).toInclude("sort bills");
  });

  it('should let you to delete a note', function(){
    note.add("feed cat");
    note.add("tidy room");
    note.delete("feed cat");
    expect(note.notes).notToInclude("feed cat");
  });

  it('should grab a note', function(){
    note.add("feed the monkey");
    expect(note.grab(0)).toEqual("feed the monkey");
  });
});
