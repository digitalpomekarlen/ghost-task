const numbers = [11,22,55,98,12];
let output = 0;
for(var i = 0; i < numbers.length; i++){
if( numbers[i] > 111 ){
output = 0;
}
else if (numbers[i] % 11 == 0){
output++;

}
}
console.log("Input: " + "[" + numbers + "]");
console.log("Output: " + output);