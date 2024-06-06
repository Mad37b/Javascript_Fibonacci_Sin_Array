
// fibonacci sin array 

// variables 

var veces = 10

function numeroFi(veces){
var A = 0;  
var B = 1; 
console.log (A)

// numero de veces que va a sumar / 5 veces 
 for ( var index = 1 ; index < veces ; index ++){

// autoincremental 
var C = A + B
A = B
B = C 

console.log(B);

 }
}

numeroFi(veces)