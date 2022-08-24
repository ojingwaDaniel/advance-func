// SORT
let listOfNumbers = [3000,400.5,20,1999,50,6000,43,567,2003]
let asendingOrder = listOfNumbers.slice().sort((x,y)=>x - y)
let desendingOrder = listOfNumbers.slice().sort((x,y)=> y - x)
console.log(asendingOrder)
console.log(desendingOrder)
let laligaCLubs = [
    {
        name : 'Real Madrid',
        sofaScore : 8.5
    },
    {
        name : 'FC Barcelona',
        sofaScore : 7.0
    },
    {
        name : 'ATM',
        sofaScore : 6.0
    },
    {
        name : 'Sevilla',
        sofaScore : 5.0
    },
    {
        name : 'Villereal',
        sofaScore : 4.0
    },
    
    
    
    
    
]
 let asendingRating = laligaCLubs.sort((a,b)=>a.sofaScore -b.sofaScore)
 console.log(asendingRating)
 let desendingRating = laligaCLubs.slice().sort((a,b)=>b.sofaScore -a.sofaScore)
 console.log(desendingRating)