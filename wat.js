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

