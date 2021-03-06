
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function myFunctionTest1(expected, found) {
    if (expected.length !== found.length) {
        return "Test FAILED"
    }
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== found[i]) {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
        else {
            return "TEST SUCCEEDED";
        }
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
/* checking if a char is a vowel or not*/
function isVowel(s) {
    if (s > 'a' && s < 'z' || str > 'A' && s < 'Z') {
        if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') {
            return true;
        }
        else if (s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log("Expected output of isVowel(e) is true  " + myFunctionTest(true, isVowel('e')));
console.log("Expected output of isVowel(e) is true  " + myFunctionTest(false, isVowel('e')));

/* finding the sum of numbers*/

var array = [2, 4, 5, 6, 5];
function Sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log("Expected out put of sum of [2, 4, 5, 6, 5] is 22  " + myFunctionTest(22, Sum(array)));
console.log("Expected out put of sum of [2, 4, 5, 6, 5] is 22  " + myFunctionTest(20, Sum(array)));

/* finding the multiple of numbers*/

function Multiply(array) {
    let multiple = 1;
    for (let i = 0; i < array.length; i++) {
        multiple = multiple * array[i];
    }
    return multiple;
}
console.log("Expected out put of sum of [2, 4, 5, 6, 5] is 1200  " + myFunctionTest(1200, Multiply(array)));
console.log("Expected out put of sum of [2, 4, 5, 6, 5] is 1200  " + myFunctionTest(100, Multiply(array)));

/* finding the reverse of the a string */

function reverse(str1) {
    let str = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        str += str1[i];
    }
    return str;
}
console.log("Expected out put reverse('hello') is olleh " + myFunctionTest('olleh', reverse('hello')));
console.log("Expected out put reverse('hello') is olleh " + myFunctionTest('ollhe', reverse('hello')));

/* finding the longest word from an array */

var array1 = ["hello", "i", "am", "coming"]
function longestWord(array) {
    let word = array[0];
    for (let i = 0; i < array.length; i++) {
        if (word.length < array[i].length) {
            word = array[i]

        }
    }
    return word;
}
console.log("Expected out put longest word from ['hello','i','am','coming'] is coming " + myFunctionTest('coming', longestWord(array1)));
console.log("Expected out put longest word from ['hello','i','am','coming'] is coming " + myFunctionTest('hello', longestWord(array1)));

/* finding words greater than i from an array*/

let array2 = ["gebrish", "bereket", "samuel", "meri", "yafu", "natu"];
function longword(array, num) {
    let words = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            words.push(array[i]);
        }
    }
    return words;
}
console.log("Expected out put words its length greater than 5 from ['gebrish', 'bereket', 'samuel', 'meri', 'yafu', 'natu'] is gebrish,bereket,samuel " + myFunctionTest1(['gebrish', 'bereket', 'samuel'], longword(array2, 5)));

/* modify the given array*/
 const a = [1, 3, 5, 3, 3];
 const b = a.map(function (elem, i, array) {
     return elem * 10;
 })
 console.log(b);

 const c = a.filter(function (elem, i, array) {
     return elem == 3;
 })
 console.log(c);

 const d = a.reduce(function (prevValue, elem, i, array) {
     return prevValue * elem;
 })
 console.log(d);


