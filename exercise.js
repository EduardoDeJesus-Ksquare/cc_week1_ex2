/* * Instructions *
    A palindrome is a word or phrase that's read or spelled the same way backwards or forwards when we ignore spaces,
    punctuation or symbols.

    Note that for this exercise you will only need to remove spaces as no symbols or punctuations will be present in the
    test cases.

    You will receive a string as argument str and you need to return TRUE if the string is a palindrome or false if the string
    is not a palindrome

    Hint: You can use the String method split() to obtain an array with all the characters from the string.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const palindrome = (str) => {
 
    const reverseString = str.split('').reverse().join(''); /* convert the string into an array, split it into individual characters and then reverse em before joining them into a new array*/

    if(str == reverseString) { /*checking whether the two string match, if they do its a palindrome if they dont it isnt*/
      console.log('It is a palindrome');
  }
    else {
      console.log('It is not a palindrome');
  }
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.palindrome = palindrome;