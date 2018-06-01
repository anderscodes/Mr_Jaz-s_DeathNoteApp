feature('noteApp',function(){
 scenario('fills in a note and displays it',function(){
   fillIn('new_to_do', 'hello')
   click('submit')
   hasContent('hello')
 })

 scenario('only shows the first 20 characters of a note', function(){
   fillIn('new_to_do', "a very very very looooooong string")
   click('submit')
   hasContent('a very very very lo')
 })

 scenario('shows full note when clicked', function(){
   click('1')
   hasContent("a very very very looooooong string")
 })

 scenario('clicking goBack button will take you back to the full list of notes', function(){
   click('goBack')
   hasContent('Your Jazz ToDo List')
 })
})
