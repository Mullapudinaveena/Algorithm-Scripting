//Solving Palindrome problem using Build-in functions

//palindrome("eye") should return true.
//palindrome("_eye") should return true.
//palindrome("race car") should return true.
//palindrome("not a palindrome") should return false.
//palindrome("A man, a plan, a canal. Panama") should return true.
//palindrome("never odd or even") should return true.
//palindrome("nope") should return false.
//palindrome("almostomla") should return false.

function palindrome(str) {
  //Using regExp to remove character from the string.
  var re = /[\W_]/g;
  
  //converting the given string into lowerCase and replacing non-alphanumeric values.
  var lowStr = str.toLowerCase().replace(re, '');
  
  //To get the reverse of the string.
  var newStr = lowStr.split('').reverse().join('');
  
  //Checking if both srings are same and return true or false accordingly.
  return lowStr === newStr;
}

palindrome("eye");

