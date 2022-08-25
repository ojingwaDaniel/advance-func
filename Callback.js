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
 // INTRODUCTION TO REDUCE
 // used to compare two elements in a array per time 
 const num = [9,8,7,6,4,5]
 const answer = num.reduce((totalAnswer,currentNumber)=> totalAnswer + currentNumber)
 // checking the maximum score of students grade
 let grades = [87,64,56,75,83,90,78,69,74,45,30]
const maximumScore = grades.reduce((maxScore,currentGrade)=>{
    if (maxScore > currentGrade) {
        return maxScore
        
    }
    return currentGrade
 })
 const minimumScore = grades.reduce((minScore,currentGrade)=>{
    if (minScore < currentGrade) {
        return  minScore
        
    }
    return currentGrade
 })
 console.log(maximumScore)
 // can acheive all these using the built-in Math.max function
 const minmumScore = grades.reduce((min,currVal)=> Math.min(min,currVal))
 // doing the same for the max 
 const  maxGrade = grades.reduce((max,currVal)=> Math.max(max,currVal))
 //complex use of reduce

 //voting for peter obi , atiku , tinubu
 // if you vote for peter obi put in LP , ATIKU : PDP , tinubu : APC

 let votes = ['LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','PDP','APC','LP','LP','LP','LP','LP','LP','LP','LP','LP','LP','LP','LP','LP']
 let countingVote = votes.reduce((allVote,currentVote)=>{
    if (allVote[currentVote]) {
        allVote[currentVote]++
    } else {
        allVote[currentVote] = 1
    }
    return allVote
 },[])
 let bigCLubs = [

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
        sofaScore : 5.0
    },
    {
        name : 'Liverpool',
        sofaScore : 7.0
    },
    {
        name : 'Manchester United',
        sofaScore : 6.0
    },
    {
        name : 'Chelsea',
        sofaScore : 6.0
    },
    {
        name : 'Man city',
        sofaScore : 5.0
    }
    
 ]

    
    
   