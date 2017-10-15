//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

/* titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
 */
function titleCase(str) {
  
  //1.lowerCase the given sentence.
  str = str.toLowerCase();
  
  //2.Split the given srting.
  str = str.split(' ');
  
  //3. for loop iterates through the words and cpatalizes the first letter.
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    
  }
  
  //Return the string by joining it.
  return str.join(' ');
  
}

titleCase("I'm a little tea pot");
