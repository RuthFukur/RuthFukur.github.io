var arr1=[1,2,3,4,5];
var arr2=[3,4,5];
var arr3=[10,40,50,200];

describe("Sum test", function() {

    it("The Sum of the Array is 15", function() {
      assert.equal(sum(arr1), 15);
    });

    it("The Sum of the Array is 12 ", function() {
        assert.equal(sum(arr2), 12);
      });
      it("The Sum of the Array is 300 ", function() {
        assert.equal(sum(arr3), 300);
      });
  });

  describe("Multiply Test", function(){
    it("The Product of the Array is 120", function() {
        assert.equal(multiply(arr1), 120);
      });
      it("The Product of the Array is 60 ", function() {
        assert.equal(multiply(arr2), 60);
      });
      it("The Product of the Array is 300 ", function() {
        assert.equal(multiply(arr3), 4000000);
      });

  });

// testing reverse function
var st1="Java";
var st2="Python";
var st3="JavaScript";

describe("reverse", function() {

    it("reverse of String st1 is avaJ", function() {
      assert.equal(reverse(st1), "avaJ");
    });
    it("reverse of String st2 is nohtyP", function() {
        assert.equal(reverse(st2), "nohtyP");
      });

      it("reverse of String st3 is tpircSavaJ", function() {
        assert.equal(reverse(st3), "tpircSavaJ");
      });
  });
  
  //  testing the filterLongWords function
  var array1= ["action","support","wife","decision","receive","base"]
  var x=6;
  describe("Filtered Long Words", function() {

    it("filtered long words are: ['support', 'decision', 'receive' ]", function() {
      assert.deepEqual(filterLongWords(array1, x), ['support', 'decision', 'receive' ]);
    });

  });
  
  