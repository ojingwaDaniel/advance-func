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
music.forEach(favoriteMusic=>{
    console.log(`${favoriteMusic.name} by ${favoriteMusic.artist} i rate it ${favoriteMusic.rating}`)
})
// MAP //
let words = ['asap','diy','lol','rsvp','bysop']
let abbreviation = words.map(word=>{
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
let doubleArray = numbers.map(function(num){
    return num * 2
})
console.log(doubleArray)
// ARROWS FUNCTIONS
const setOfNumbers = [1,2,4,5,7,8,14,24,26]

const mutiply = setOfNumbers.map(elements => elements * elements)
console.log(mutiply)
//printing out a odd and even numbers

const parityNumbers = setOfNumbers.map(num=>num % 2 == 0 ? `${num} : even` : `${num} : odd`)

console.log(parityNumbers)
let parity = setOfNumbers.map(num=>{
    
    return{
        value : num,
        details : num % 2 === 0 ? 'even' : 'odd'
    }
})
console.log(parity)
// FIND
let song = [
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
        name : 'God your\'e so Good',
        artist : 'Passions',
        rating : 9
    },
    {
        name : 'Break a Chain',
        artist : 'Jesus Culture',
        rating : 5.5
    },
    {
        name : 'my worship',
        artist : 'theophilus',
        rating : 7.0
    },
    {
        name : 'Goodness of God',
        artist : 'Bethel Music',
        rating : 7.5
    },
    
    
    
]

let bestSong = song.find(song=>song.name.includes('God your\'e so Good'))
console.log(bestSong)
let players = ['Araujo','Eric Garcia','Christensen','Pique','Kounde']
let bestCB = players.find(player => player.includes('A'))
console.log(bestCB)
// FILTER
let usersSearch = 'God'
let bestRating = song.filter(song=>{
    let title = song.name.toLowerCase()
    usersSearch  = usersSearch.toLowerCase()
    return title.includes(usersSearch)

})
console.log(bestRating)
let BestCB = players.filter(player=>(
    player.includes('Araujo') || player.includes('Kounde')
))
console.log(BestCB)
// EVERY
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
let clubRating = laligaCLubs.every(clubs=> clubs.sofaScore >3.0)
console.log(clubRating)
let clubname = laligaCLubs.some(clubs => clubs.name.includes('FC'))
console.log(clubname)
