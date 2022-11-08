/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

function sum(arr){
    return arr.reduce((acc,item)=> acc +item,0);
}
function multiply(arr){
    return arr.reduce((acc,item)=> acc *item,1);
}
function reverse(x){
    let word= x.split("");
    return word.reduce( (acc,item)=> item+acc);
}

function filterLongWords(arry,i){
     var arr2= arry.filter(x=>x.length>i)
     return arr2;
}