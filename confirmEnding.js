//Check if a string (first argument, str) ends with the given target string (second argument, target).


/* confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
 */

//1.solution-1
function confirmEnding(str, target) {
  //using endsWith()
  str = str.endsWith(target);
  return str;
}

confirmEnding("Bastian", "n");

//2.solution-2
function confirmEnding(str, target) {
	
  // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n' 
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')
  	
  if(str.substr(-target.length) === target){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
