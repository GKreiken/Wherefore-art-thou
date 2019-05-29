/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */


function myReplace(str, before, after) {
  let sentArr = str.split(" ");
  let beforeWord = sentArr[sentArr.indexOf(before)].split("");
  console.log(beforeWord);

  
  if (beforeWord[0] === beforeWord[0].toUpperCase()) {
    let afterWord = after.split("");
    afterWord[0] = afterWord[0].toUpperCase();  /*als ik hierachter nog .join(""); 
    zet doet ie het niet. Waarom is dat?*/
    after = afterWord.join("");
    console.log(after);
  };

  sentArr[sentArr.indexOf(before)] = after;
  let result = sentArr.join(" ");
  console.log(result);
  return result;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");