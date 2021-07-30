
describe("filter", function () {

    it("the result of the sentence without the abandent word from 'i am bad student' is 'i am  student' ", function () {
        assert.equal("i am bad student".filter("bad"), "i am  student");
    });
})
describe("filter", function () {

    it("the result of the sentence without the abandent word from 'i am bad student' is 'i am  student' ", function () {
        assert.equal("i am bad student".filter("bad"), "i student");
    });
})
////////////////////////////////////////////////////////////////////////////////////////
describe("bubbleSort", function () {
    it("the result of array [1,5,2,3,6,7] after bubbleSort is [1,2,3,5,6,7] ", function () {
        assert.deepEqual([1, 5, 2, 3, 6, 7].bubbleSort(), [1, 2, 3, 5, 6, 7]);
    });
})
describe("bubbleSort", function () {
    it("the result of array [1,5,2,3,6,7] after bubbleSort is [1,2,3,5,6,7] ", function () {
        assert.deepEqual([1, 5, 2, 3, 6, 7].bubbleSort(), [1, 3, 2, 5, 6, 7]);
    });
})
///////////////////////////////////////////////////////////////////////////////////////////
describe("teach", function () {
    it("Returns the teacher name and her teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Micheal", 38);
            assert.equal(teacher.teach("WAP"), "Micheal is now teaching WAP");
        });
});
describe("teach", function () {
    it("Returns the teacher name and her teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Micheal", 38);
            assert.equal(teacher.teach("WAP"), "gebrishl is now teaching WAP");
        });
});
