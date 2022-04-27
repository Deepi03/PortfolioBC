const person = {
    name : ['Deepika', 'Vijai'],
    age : 29,
    gender : 'Female' , 
    interest : ['music' , 'badmiton'],
    bio : function(){
        console.log(this.name[0] + this.name[1] + ' is '  + this.age + ' years old ' + '. ' + 'She  likes' + this.interest[0] + ' and ' + this.interest[1] );

    }  ,

    greeting : function(){
        alert('Hi i am ' + this.name[0] + this.name[1] + '.');
    }
}
person.greeting();

var btn1 = document.getElementById('mybtn');

btn1.addEventListener('click', greeting);

function greeting(name){
  var x = document.getElementById('txt').value;

      alert('Hi i am ' +  x);
  }




// function Animal(type,breed,color){
  
//         this.type = type; this.breed = breed;
//          this.color = color;
//         this.greeting = function(){
//             console.log(`My name is ${this.type} the ${this.breed} in ${this.color}`);
        
//     }
// }


// let cat = new Animal('cat' , 'veetukutty' , 'black');
// cat.greeting();
// let dog = new Animal('dog' , 'pottakuitty' , 'white');
// dog.greeting();