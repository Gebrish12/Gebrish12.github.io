String.prototype.filter = function (banned) {
    if (banned !== null) {
        return this.replace(banned,"");
    }
    else {
        return 'please enter a word to discard';
    }

}
//console.log("this house is not nice".filter("not"));
//////////////////////////////////////////////////////////////////

Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
}
//console.log([3, 5, 1, 6].bubbleSort())

//////////////////////////////////////////////
Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function () {
    return `${this.name}, ${this.age} years old.`;
};

Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
}

let teacher = new Teacher();
teacher.initialize("Micheal", 38);
console.log(teacher.teach("WAP"));


