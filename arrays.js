var chocolateBars = ['snickers', 'hundred gram', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfAray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[(index)]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
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
