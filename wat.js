const why = [{bar:1}];
[why.bar] = [2,3];
console.log(why.bar);
console.log(JSON.stringify(why));


if (+[] == 0) {
    console.log('why');
}


if (+[] === 0) {
    console.log('double why');
}


console.log(new String('foo'))

if (new String('foo') == 'foo') {
    console.log('ok')
}


if (new String('foo') === 'foo') {
    console.log('ok')
} else {
    console.log('good')
}


if (0) {
    console.log('but why')
}

res = [1,2,3,4,5,6,7,8,9,10].filter(value => value % 2 === 0);
console.log(res);

const generateStringArray = (length, string) => Array.from(new Array(length), (val, index) => string.replace('{i}', index))
console.log(generateStringArray(res[0], "some string {i}"));
console.log(generateStringArray(res[0] * res[1] + res[2], "some string {i}"));

let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
     return num
  }
})
console.log(filteredNumbers);

