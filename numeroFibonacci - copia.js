// variables 

var veces = 50 


function numeroVeces( veces){
let num1 = 0 
let num2= 0 
let numTotal= 0 ; 
// numero de veces que va a sumar / 50 veces 
 for ( var index = 0 ; index < veces ; index ++){
// condicion 
if ( num1 < veces ) {
    numTotal = num2 + index+1;

console.log("index" + index + "Numeros fibonacci ;" + numTotal)

}

console.log(numtotal)
 }

}


// 


// variables 

var veces = 5 


function numeroVeces(veces){

var num2= 1;
var numTotal=0; 
// numero de veces que va a sumar / 50 veces 
 for ( var index = 1 ; index < veces ; index ++){
    for ( var j = 0 ; j < 6 ; j++){
// condicion 
var numTotal1 = 0+1
numTotal= 1 + numTotal1++
console.log(numTotal);
}



 }


}

numeroVeces(veces)

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



// EJEMPLO CON ARRAY 

function
fibonacciSeries
(n) {    
if
(n <= 0) {        
return
[];     }
else
if
(n === 1) {        
return
[0];     }
else
if
(n === 2) {        
return
[0, 1];     }    
const
series = [0, 1];    
for
(
let
i = 2; i < n; i++) {
const
nextNumber = series[i - 1] + series[i - 2]; series.
push
(nextNumber); }
return
series; }
const
n = 10;
const
fibonacci =
fibonacciSeries
(n);console.
log
(fibonacci);