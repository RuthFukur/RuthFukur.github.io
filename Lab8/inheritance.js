
//********************Exercise 1:**************************************************//
String.prototype.filter = function (banned) {
    const strList = this.split(" ");
    const filteredWord = strList.filter(x => !banned.includes(x));
    return filteredWord.join(' ');
  };
  console.log("Hello this is not a home, not nice home.".filter("not"));



//********************Exercise 2:**************************************************//

    Array.prototype.BubbleSort = function () {
      let len = this.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (this[j] > this[j + 1]) {
            let tmp = this[j];
            this[j] = this[j + 1];
            this[j + 1] = tmp;
          }
        }
      }
      return this;
    };
console.log([12, -4, 2, 0, 10, 1].BubbleSort());

//********************Exercise 3:**************************************************//
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
this.name = name;
this.age = age;
}
Person.prototype.describe = function()
{
return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");


// To Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and returns:

var Teacher = function() {
  this.teach = function(subject){
      console.log(this.name + " teaching " + subject);
  }
}
Teacher.prototype = new Person();
var teacher1 = new Teacher();
var teacher2 = new Teacher();
var teacher3 = new Teacher();

teacher1.initialize("ruth", 23);
teacher1.teach("Mathematics");

teacher2.initialize("Birhane", 52);
teacher2.teach("Biology");

teacher3.initialize("Nardos", 18);
teacher3.teach("WAP");