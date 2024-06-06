

// fibonacci con array

var array = [0,1];

for (var i = 0 ; i < 5 ; i++){
array.push(array[i]+array[i+1])
}
console.log(array)