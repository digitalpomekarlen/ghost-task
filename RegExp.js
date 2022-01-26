const input = prompt();
console.log(input);
let year = input.match(/(?<=YEAR)[\d]{4}/gi);
let month = input.match(/(?<=MONTH)([\d]{2}|[\d]{1})/gi);
let day = input.match(/(?<=DAY)([\d]{2}|[\d]{1})/gi);
console.log(year[0] + "-" + month[0] + "-" + day[0]);