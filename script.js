let numbers = [2003,2004,2005,2006,2007,2008,2009,2010]
numbers.forEach(digit=>{
    console.log(digit * digit)
})
// callback a function on forEach
let num = [2,3,5,6,8,9,19,12,13,15,16,18,19,34,35,36,38,39]
num.forEach(function(digit){
    if(digit % 2 === 0){
        console.log(digit)
    }
})