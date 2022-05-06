// 1. Sum Zero
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// let array = [1, 4, 11, 2, 37, -4]

// for (i = 0; i < array.length; i++){
//     for (let h = i; h < array.length; h++){
//         if (i + h === 0){
//             let solution = "addsToZero"
//         }
//     }
// }
// if(solution = "addsToZero"){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// 2. Unique Characters
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// function hasUniqueChars(word){
//     let wordArray = word.split("")
//     for(i = 0; i < wordArray.length; i++){
//         wordArray.splice(wordArray[i], 1);
//         if(wordArray.find(i) != undefined){
//             return false
//         }
//         else {
//             return true
//         }
//     }
// }
// console.log(hasUniqueChars("Monday"))


// 3. Panagram Sentence
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let userArray = []

// function isPangram(string) {
//     userArray = string.split("")

//     for(i=0; i<userArray.length; i++){
//         for(j=0; j<alphabet.length; j++){
//             if(userArray[i] === alphabet[j]){
//                 alphabet.splice(alphabet[j], 1)
//             }
//         }
//     }

//     if (alphabet.includes('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')){
//     return false
//     }
//     else {
//         return true
//     }
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


// 4. Longest Word
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// let randArray = ["hi", "hello"]
// let longestWord = 0

// function findLongestWord(randArray) {
//     for(i=0; i<randArray.length; i++){
//         if(randArray[i].length > longestWord){
//             longestWord = randArray[i].length
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord(randArray))