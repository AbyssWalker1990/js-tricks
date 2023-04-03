/**
 * Complete the solution so that it reverses all of the words within 
 * the string passed in.

Words are separated by exactly one space and there are no 
leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"
 */

// function reverseWords(str) {
//     const arr = str.split(" ")
//     const reversedArr = arr.reverse()
//     const strFromArr = reversedArr.join(' ')
//     return strFromArr
// }

function reverseWords(str) {
    const arr = str.split(" ")
    const resultArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let word = arr[i]
        resultArr.push(word)
    }

    return resultArr.join(' ')
}

const arrTest = ['Tania', 'Vova', 'Vadim', 'Arina']
console.log(arrTest[3])


console.log(reverseWords("The greatest victory is that which"))
