
function sum(array) {
    return array.reduce((a, b) => a + b, 0);
}
function multiple(array) {
    return array.reduce((a, b) => a * b, 1);
}

/* finding the reverse of the a string */

function reverse(str) {
    return str.split("").reduce((a, b) => b + a);

}


/* finding the longest word from an array */

function findLongestWord(words) {
    return words.reduce((longest, w) => w.length > longest.length ? w : longest,"");
}


/* finding words greater than i from an array*/


function longword(array, num) {
    return array.filter(a => a.length > num)
}