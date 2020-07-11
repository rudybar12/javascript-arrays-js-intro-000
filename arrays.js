var chocolateBars = ['snickers', 'hundred gram', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfAray(array, element){
  var alterArray = array.unshift(element)
  return alterArray;
}

function addElementToBeginingOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToBeginingOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array, index){
  return [array(index)];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var shiftedArray = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var sliceArray = array.slice(1);
  return sliceArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var popedArray = array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  var lastElementSliced = array.slice(0, array.length-1);
  return lastElementSliced;
}
