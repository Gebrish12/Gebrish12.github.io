var str1 = "Hello";
var str2 = "cat";
describe("reverse", function () {

    it("reverse of String Hello is olleH", function () {
        assert.equal(reverse(str1), "olleH");
    });
});
describe("reverse", function () {

    it("reverse of String st2 is tac", function () {
        assert.equal(reverse(str2), "cat");
    });
});

/////////////////////////////////////////////////////////////////////////
array = [1, 3, 2, 4, 4];
describe("sum", function () {

    it("sum of array[1, 3, 2, 4, 4] is 14", function () {
        assert.equal(sum(array), 14);
    });
});
describe("sum", function () {

    it("sum of array[1, 3, 2, 4, 4] is 14", function () {
        assert.equal(sum(array), 13);
    });
});
//////////////////////////////////////////////////////////////////////////////////////
describe("multiple", function () {

    it("multiple of array[1, 3, 2, 4, 4] is 96", function () {
        assert.equal(multiple(array), 96);
    });
});
describe("multiple", function () {

    it("multiple of array[1, 3, 2, 4, 4] is 106", function () {
        assert.equal(multiple(array), 106);
    });
});
///////////////////////////////////////////////////////////////////////////////////////////
let words = ['gebrish', 'berket', 'samuel', 'meri', 'yafu', 'natu'];
describe("findLongestWord", function () {

    it("the longest word from words  ['gebrish', 'berket', 'samuel', 'meri', 'yafu', 'natu'] is gebrish", function () {
        assert.deepEqual(findLongestWord(words), 'gebrish');
    });
});
describe("findLongestWord", function () {

    it("the longest word from words  ['gebrish', 'berket', 'samuel', 'meri', 'yafu', 'natu'] is gebrish", function () {
        assert.deepEqual(findLongestWord(words), 'meri');
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////
describe("longword", function () {

    it("words greater than 5 from words  ['gebrish', 'berket', 'samuel', 'meri', 'yafu', 'natu'] are gebrish,bereket,samual", function () {
        assert.deepEqual(longword(words,5), ['gebrish', 'berket', 'samuel']);
    });
});
describe("longword", function () {

    it("words greater than 5 from words  ['gebrish', 'berket', 'samuel', 'meri', 'yafu', 'natu'] are gebrish,bereket,samual", function () {
        assert.deepEqual(longword(words, 5), ['gebrish', 'berket', 'natu']);
    });
});
