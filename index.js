function isPalindrome(word) {
  // iterate from the beginning to the middle

  for (let i = 0; i < word.length/2; i++) {
  //   check each letter to the corresponding letter from the end
  const j = word.length - 1 - i;
  // const startChar = word[i];
  // const endChar = word[j]; // optimize the code by removing the variable assignments to save on memory allocation
  // if any of the letter dont match, return false
  if (word[i] !== word[j]) return false
  }
  // else return true
  return true
}

/*
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij

*/

/* 
  Add your pseudocode here
  if the first letter is the same as the last letter, 
  and the second letter is the same as the second to last letter e.t.c
  till we reach the midpoint, return true
  
  iterate from the beginning to the middle
    check each letter to the corresponding letter from the end
      if any of the letter dont match, return false

  else return true
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

}

module.exports = isPalindrome;
