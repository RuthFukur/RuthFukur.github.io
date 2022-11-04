function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  //1. returning the Largest of two numbers 
  function maxOfTwo(x,y){
    if(x>y){
        return x;
    }else{
        return y;
    }
}       
console.log("Expected output of max(52,83) is 83  " + myFunctionTest(83, maxOfTwo(52,83)));

//2. returning the Largest of three numbers 
function maxOfThree(x,y,z){
    if(x>y && x>z){
        return x;}
   else if(y>x && y>z){
    return y;
   }
   else{
    return z;
   }
} 
console.log("Expected output of max(52,93,5) is 93  " + myFunctionTest(93, maxOfThree(52,93,5)));

//3 check if it is vowel

function isVowel( x){
    if(  x.length==1 &&(x=='a' || x=='e'|| x=='i' || x=='o' || x=='u') ){
        return true;
    }
    else 
    return false;
}
console.log("Expected output true " + myFunctionTest(true, isVowel('a')));

// 4 sum and multiply

function sum(x){
    var sum=0;
    var i=0;
    for(i; i<x.length;i++){
        sum=sum+x[i];
    }
    return sum
}
function multiply(x){
    var mul=1;
    var i=0;
    for(i; i<x.length;i++){
        mul=mul*x[i];
    }
    return mul;
}
var q1= [1,2,3,4]

console.log("Expected output of sum[1,2,3,4] is 10  " + myFunctionTest(10, sum(q1)));
console.log("Expected output of multiply[1,2,3,4] is 24  " + myFunctionTest(24, multiply(q1)));

//5 reverse
function reverse(x){
    if(x.length==1) 
    {return x;}
    var rev="";
    for(let i=x.length-1;i>=0;i--){
        rev= rev +x[i];
    }
    return rev;
}
console.log("Expected output of reverse of 'Hello World' is 'dlroW olleH'  " + myFunctionTest("dlroW olleH", reverse("Hello World")));


//6. returning the length of the longest word from an array
function findLongestWord(arr){
    let longest=arr[0].length;
    for(let i=1; i<arr.length; i++){
        if(longest<arr[i].length){
            longest = arr[i].length;
        }
    }
    return longest;
}
console.log("Expected output of longest word's size from the give array is 10  " + myFunctionTest(10, findLongestWord(["well", "come", "to", "the", "world", "of", "javascript" ])));

//7. taking an array of words and an integer i and returning the array of words that are longer than i
function filterLongWords(arr, i){
    let newArr=[];
    for(let j=0; j<arr.length; j++){
        if(arr[j].length>i){
            newArr.push(arr[j]);
        }
    }
    return newArr;
}

console.log("Expected output of filtered long words of the given array is 'three, four, five, seven' " + filterLongWords([ "three", "four", "five", "seven" ], filterLongWords(["one", "two", "three", "four", "five", "six", "seven"], 3)));

//8. function modifing(){
    
    const a = [1,3,5,3,3]; 

    //a) multiply each element by 10; 
    const b = a.map(function(elem, i, array) {
      return elem *10;
    });
    console.log("After multipling [1,3,5,3,3] by 10 is  " +b);
    //document.writeln(b.toString() + "<br/>");
    
    
    
    //b) return array with all elements equal to 3; 
    const c = a.filter(function(elem, i, array){
      return elem === 3;});
      
    console.log("After filtering 3s from [1,3,5,3,3] is  " +c);
    //document.writeln(c.toString() + "<br/>");
    
    
    
    //c) return the product of all elements;
    const d = a.reduce(function(prevValue, elem, i, array){
      return prevValue * elem;
    });
    console.log("The product of [1,3,5,3,3] is  " +d);
    //document.writeln(d.toString() + "<br/>");
    