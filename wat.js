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
} else {
    //do nothing
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
     if (true) {
         console.log('how does this work');
     }
  }
    else{
        
    }
})
console.log(filteredNumbers);


const foo = [1,2,3];
const baz = foo.map(function bar (n) { return n + 1; });
console.log(foo,baz);

my_arr =[1,2,3]*10
console.log(my_arr)
my_arr =[1,2,3] + [7,8,9]
console.log(my_arr)
my_arr =[1,2,3] * [7,8,9]
console.log(my_arr)
res = [1,2,3,4,5,6,7,8,9,10].filter(value => value % 2 === 0);
console.log(res);

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
const my_good_const_var = Math.PI / calculateCircumference(10)
console.log(my_good_const_var)
console.log(calculateCircumference(10));

