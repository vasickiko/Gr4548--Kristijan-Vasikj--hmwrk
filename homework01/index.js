// Филтрирање на дадена низа по даден параметар

const users = [
    {name: "Petar", age: 20, workingExperienceInYears: 3},    
    {name: "Stefan", age: 21, workingExperienceInYears: 2},
    {name: "Marko", age: 22, workingExperienceInYears: 5},
    {name: "Filip", age: 23, workingExperienceInYears: 1},
    {name: "Andrej", age: 21, workingExperienceInYears: 6},
    {name: "Dimitar", age: 25, workingExperienceInYears: 2},    
]

function filterArray(arrayName, age){
    return arrayName.filter(users=>users.age === age)
}

const filteredArray = filterArray(users, 21);

console.log(filteredArray);


// Сортирање на дадена низа по даден параметар

function sortedArray(arrayName, key, op){
    return arrayName.sort((a, b)=>
    {
        if(op === 'asc'){
            return a[key] - b[key];
        }else if(op === 'desc'){
            return b[key] - a[key];
        }else{
            return 0;
        }           
    }
    )
}

console.log(sortedArray(users, 'workingExperienceInYears', 'asc'))


// Сумирање на параметри од дадена низа

function sumNumbers(key){
    return users.reduce((totalAge, user) => totalAge + user[key] ,0)
}

// const resultOfSumNumbers = sumNumbers('age')
console.log(sumNumbers('age'));


// Пронаоѓање на член од дадена низа

const findAge = users.find(user => user.age === 21);
console.log(findAge);