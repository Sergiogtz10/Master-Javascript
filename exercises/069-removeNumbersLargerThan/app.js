let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

   
function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
      if(obj[key] > num)
        delete obj[key];
    }
    return obj;
}
let output = removeNumbersLargerThan(5, obj);
console.log(output); 