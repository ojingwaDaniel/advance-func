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
// for each to print out the index and each element
let digits = [2,3,5,6,8,9,19,12,13,15,16,18,19,34,35,36,38,39]
digits.forEach(function(digit,index){// first parameter represent each element on the array , the second represent the index of the array ,the third parameter represnt the array itself
    console.log(`${index}  : ${digit}`)
})
let music = [
    {
        name : 'There was jesus',
        artist : 'Zack Willams',
        rating : 7.5
    },
    {
        name : 'Confidence',
        artist : 'Santus Real',
        rating : 8
    },
    {
        name : 'God is so Good',
        artist : 'Passions',
        rating : 9
    },
    {
        name : 'Break a Chain',
        artist : 'Jesus Culture',
        rating : 7.5
    }
]
music.forEach(function(favoriteMusic){
    console.log(`${favoriteMusic.name} by ${favoriteMusic.artist} i rate it ${favoriteMusic.rating}`)
})
// MAP //
let words = ['asap','diy','lol','rsvp','bysop']
let abbreviation = words.map(function(word){
    word =  word.toUpperCase().split('').join('.')
    return word
})
console.log(abbreviation)
let favorites = music.map(function(favoriteMusic){
    return favoriteMusic.name
})
console.log(favorites)
let wholeNumbers = numbers.map(function(num){
    return{
        value : num,
        isWholeNumber : num % 2 === 0
    }
})
console.log(wholeNumbers)