/* 
You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

    If the length of the word is 1 or 2 letters, change all letters to lowercase.
    Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

Return the capitalized title.

 

Example 1:

Input: title = "capiTalIze tHe titLe"
Output: "Capitalize The Title"
Explanation:
Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

Example 2:

Input: title = "First leTTeR of EACH Word"
Output: "First Letter of Each Word"
Explanation:
The word "of" has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

*/

`
*************************************************************************
*************SOLUTION of 2129. Capitalize the Title   *************
************************************************************************
`

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let final = []
    let arr = title.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            let first = arr[i][0].toUpperCase();
            let val = arr[i].slice(1, arr[i].length).toLowerCase()
            final.push(first + val)
        } else {
            let first = arr[i].toLowerCase();
            final.push(first)
        }
    }
    return final.join(' ')
};