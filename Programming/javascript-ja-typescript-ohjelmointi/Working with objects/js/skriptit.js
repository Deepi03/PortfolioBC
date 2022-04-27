//object created Object.create method

var cat = {
    name : 'Billy',
    breed:'Persian cat',
    color : 'white',
    greeting : function(){
        console.log(`Hello!said ${this.name} the ${this.breed} is ${this.color}
        object created Object.create method`);
    }

};

var cat2 = Object.create(cat);
cat2.name  = 'Tom';
cat2.breed = 'British shorthair';
cat2.color = 'Grey';
cat2.greeting();


//object created with factory function

function person(name,age,interest){
    return{name,age,interest,
    greeting(){
        console.log(`Hello!my name is ${this.name} and i am ${this.age} years old interested in ${this.interest} 
            this is done by factory function`);
    }
    };
}

let deepika = person('Deepika' , 25 , 'badmitton');
deepika.greeting();

let maya = person('Maya' , 53 , 'coding');
maya.greeting();


//object created with constructor function


function Animal(type,color){
    this.type = type;
    this.color = color;
    this.displayType = function(){
        console.log(`${this.type} is ${this.color}
        object created with constructor function`);
    };
}

let dog = new Animal('Dog','Black');
dog.displayType();


//Enumeratre the properties of an object

function listAllProperties(){
    for(let key in dog){
        console.log(key,dog[key]); // in console , used to separate the variables
                                   // displays key with values
    }
    for(let key1 of Object.entries(dog)){ 
        console.log("Enumeratre the properties of an object");
        console.log(key1);
    }   
}
listAllProperties();

//Defining getters and setters

var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log("Defining getters and setters")
  console.log(o.a); // 7
  console.log(o.b); // 8 <-- At this point the get b() method is initiated.
  o.c = 50;         //   <-- At this point the set c(x) method is initiated
  console.log(o.a); // 25


//Deleting  properties

var birds =new Object;
birds.peacock = "peacock";
birds.hen = "hen";

//remove the "peacock" property of birds object and keeping "hen" property of birds object
delete birds.peacock;
console.log("deleting properties");
console.log('peacock' in birds );



//Comparing objects

// Two variables, a single object
var animal = {name: 'cow'};
var domesticAnimal = animal;  // Assign animal object reference to domesticAnimal

// Here animal and domesticAnimal are pointing to same object
animal == domesticAnimal; // return true
animal === domesticAnimal; // return true

animal.name = 'dog';
console.log("comparing objects");
console.log(domesticAnimal); // output: { name: "dog" }, instead of { name: "cow" }