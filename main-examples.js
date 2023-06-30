/// scrivere una funzione che dato un array di numeri
/// li eleva al quadrato e rimuove i negativi;

// const testArray = [2,-12,0,27,4,-3,12,1,-1]

// function squareAllAndRemoveNegatives(arr) {
//     const onlyPositiveArray = arr.filter( el => el>=0);
//     const squaredArray = onlyPositiveArray.map (el => el*el);
//     return squaredArray;
// }

// console.log(squareAllAndRemoveNegatives(testArray));

// function squareAllAndRemoveNegatives2(arr) {
//     return   arr.filter ( el => el>=0)
//                 .map    (el => el*el)
// }

// console.log(squareAllAndRemoveNegatives2(testArray));

// function squareAllAndRemoveNegatives3(arr) {

//     const acc = []
//     for (const number of arr) {
//         if (number>=0) {
//             acc.push(number**2)
//         }
//     }
//     return acc

// }

// console.log(squareAllAndRemoveNegatives3(testArray));

// function squareAllAndRemoveNegatives4(arr) {

//     return arr.reduce((acc,curr)=> {
//         if (curr>=0) {
//             acc.push(number**2);
//         }
//         return acc
//     } ,[])
    
// }

// console.log(squareAllAndRemoveNegatives4(testArray));

// scrivi una funzione che dato un array di numeri 
// somma tutti quelli divisibili per 3

// function sumAllDivisibleBy3(arr) {
//     const divisibleBy3Array = arr.filter ( el => el %3 === 0)
//     const sumArray = divisibleBy3Array.reduce ((acc,curr) => acc+curr ,0)
//     return sumArray
// }

// console.log(sumAllDivisibleBy3(testArray));

// function sumAllDivisibleBy3One(arr) {
//     return arr.filter (el => el%3 ===0)
//                 .reduce((acc,curr) => acc+curr,0)
// }


// console.log(sumAllDivisibleBy3One(testArray));

// function sumAllDivisibleBy3Two(arr) {

//     const acc = 0
//     for (const number of arr) {
//         if (number%3===0) {
//             acc=acc+number
//         }
//     }
//     return acc

// }

// console.log(sumAllDivisibleBy3Three(testArray));

// function squareAllAndRemoveNegatives4(arr) {

//     return arr.reduce((acc,curr)=> {
//         if (curr%3===0) {
//             acc=acc+curr
//         }
//         return acc
//     } ,0)
    
// }

// console.log(sumAllDivisibleBy3Three(testArray));

// data una stringa di elementi separati da virgole
// convertire gli elementi in numeri
// togliere quelli che non sono numeri
// e sommarli tra loro

const testString = '200,10,pippo,345,-234,ciambella,2,,'

function convertToNumberAndSumAll(str) {
    const stringArray = str.split(',')
    const numberArray = stringArray.map(el => parseFloat(el))
    const noNanArray = numberArray.filter(el=> !isNaN(el))
    const sumAllArray = noNanArray.reduce((acc,curr)=> acc+curr,0)
    return sumAllArray
}

console.log(convertToNumberAndSumAll(testString));

function convertToNumberAndSumAll2(str) {
    return str.split(',')
                .map(el => parseFloat(el))
                .filter(el=> !isNaN(el))
                .reduce((acc,curr)=> acc+curr,0)
    
}

console.log(convertToNumberAndSumAll2(testString));


function convertToNumberAndSumAll3(str) {
    const stringArray=str.split(',')
    let acc = 0
    for (const str of stringArray) {
        const number= parseFloat(str)
        if (!isNaN(number)) {
            acc = acc+ number
        }
        
    }
    return acc
}

console.log(convertToNumberAndSumAll3(testString));


// ESERCIZI

const test1 = ['pippo', 'pluto', 'qui', 'quo', 'qua', 'paperone']
const test2 = [100,10,24,-20,300,6,100,300]
const test3 = 'ho fatto il bucato ieri sera ma si è colorato tutto di rosso'

//1) Dato un array di stringhe, eliminare tutte quelle che non contengono la lettera p
//   e ritornare la somma delle lunghezze delle rimanenti

function pRemoverAndSumLength(strArr) {
    let pArray = strArr.filter(el => el.includes('p'))
    lengthSumArr = pArray.reduce ((acc,curr)=> acc+curr.length ,0 )
    return lengthSumArr
}

console.log(pRemoverAndSumLength(test1));


    function pRemoverAndSumLength2(strArr){
        return strArr.filter(el => el.includes('p'))
                        .reduce ((acc,curr)=> acc+curr.length ,0 )
    }

console.log(pRemoverAndSumLength2(test1));

function pRemoverAndSumLength3(strArr) {
    let acc = 0
    for (const curr of strArr) {
        if (curr.includes('p')) {
            acc = acc + curr.length
        }
        
    }
    return acc
}

console.log(pRemoverAndSumLength3(test1));


function pRemoverAndSumLength4(strArr) {
    
    return strArr.reduce((acc, curr) => {
        if (curr.includes('p')) {  
            acc = acc + curr.length;  
        }
        return acc;
    }, 0);
}

console.log(pRemoverAndSumLength4(test1));

//2) dato un array di numeri, moltiplicarli per il loro indice
//   rimuovere quelli maggiori di 1000
//   e restiturli in formato stringa, separati da punto e virgola

function multiplyByIndexRemoveLess1000AndReturnStrings(nArr) {
    let timesIndexArr = nArr.map((el,i) => el*i)
    let lessThan1000 = timesIndexArr.filter(el=> el<1000)
    let strArray = lessThan1000.reduce ((acc,curr) => acc + String(curr) + ';','')
    return strArray
}

console.log(multiplyByIndexRemoveLess1000AndReturnStrings(test2));


function multiplyByIndexRemoveLess1000AndReturnStrings2(nArr) {
    return nArr.map((el,i) => el*i)
                    .filter (el=> el<1000 )
                    .reduce ((acc,curr) => acc + String(curr) + ';','')
}

console.log(multiplyByIndexRemoveLess1000AndReturnStrings2(test2));

function multiplyByIndexRemoveLess1000AndReturnStrings3(nArr) {
    let acc = ''
    for (const curr of nArr) {
        if ((curr*i)<1000) {
            acc = acc + curr
        }
        
    }
    return acc
}

console.log(multiplyByIndexRemoveLess1000AndReturnStrings3(test2));
//3) data una stringa, eliminare tutte le parole più corte di 4 caratteri
//   e restituirle in un array ordinate per lunghezza dalla piu lunga




