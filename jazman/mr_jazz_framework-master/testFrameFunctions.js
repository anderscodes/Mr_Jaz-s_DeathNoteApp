function Expect(value){
  this.value = value
}

function expect(argument) {
  return (new Expect(argument));
}

Expect.prototype.toEqual = function(value){
  if (this.value === value) {
    console.log("PASSED")
  } else {
    console.log("FAILED")
  }
};

Expect.prototype.toInclude = function(value){
  var status;
  for (var i = 0; i < this.value.length; i++) {
    if (this.value[i] === value) {
      status = true;
    }
  }
  if (status === true) {
    console.log('Yes, it is in the array.');
  } else {
    console.log('No, it is not in the array.')
  }
};

Expect.prototype.lengthToBe = function(value){
  if (this.value.length === value) {
    console.log('Yes, it is the correct length.')
  } else {
    console.log('No, it is the wrong length.')
  }
};

Expect.prototype.toReturn = function(value){
  if (this.value() === value) {
    console.log('Yes, it returned the value')
  } else {
    console.log('No, it did not return the value')
  }
};

Expect.prototype.toBeEmpty = function(){
  if (this.value.length === 0) {
    console.log('Yes, it is an empty array')
  } else {
    console.log('No, it is not empty')
  }
}

Expect.prototype.throwsError = function(value){
  try {
    this.value();
  }
  catch(e) {
    if (e === value) {
      console.log('This is the correct error')
    }
  }
}

// function errorThrower(){
//   throw "this is an error";
// }
//
// expect(function(){throw 'error'}).throwsError('error');
