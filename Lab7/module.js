var count= ( function(){
    var counter=0;
    var add= function (){
        return counter+=1;
    };
     var reset2= function (){
        counter=0;
        return counter;
    };
    var make_adder=(function(){
           var counter=0;
           return function add(x){
                 return counter+=x;
           }
           
        })();
    return{
        add:add,
        reset2: reset2,
        make_adder: make_adder,
    }
})();
console.log(count.add());
console.log(count.add());
console.log(count.reset2());
console.log(count.make_adder(5));
console.log(count.make_adder(5));
console.log(count.make_adder(15));

//5. Using the Revealing Module Pattern, 
//write a JavaScript definition of a Module that creates an Employee Object
// with the following fields and methods:

var Employee= ( function(){
    var name= "Ali"
    var age =9
    var salary=200000;
    var getName= function(){
        return name;
    } 
    var getAge= function(){
        return age;
    }
     var getSalary= function(){
        return salary;
     }

     return{
         setName: function(newname){
               name= newname;
         },
         setAge: function(newage){
            age= newage;
         },
         setSalary: function(newS){
            salary=newS;
         },
          increaseSalary: function(percentage){
                 salary= getSalary()+ (percentage * getSalary)
          },
           incrementAge: function(){
             getAge++;
           } ,
     }
})();
console.log(Employee.setName("Ruth"))
console.log(Employee.increaseSalary(20));

//6. Write a few JavaScript instruction to make a Module extension to the module made in the previous question. 
//Very important – you are not allowed to modify any of the code to facilitate the extension. Your extension should 
//add a public address field and public methods setAddress(address) and getAddress()

Employee.setAddress= function( address){
           address: address;
}

Employee.getAddress= function(){
        return Employee.setAddress();
}
 console.log( Employee.setAddress("Barentu"));
 console.log( Employee.getAddress());

