import results from './data/results.json'
// import cleanData from './lib/cleanYears'

var fetchedData = results.results.bindings
console.log(fetchedData)

// fetchedData.forEach(function(i){
//     i.img.value = i.img.value.replace("http", "https")
//     i.extent.value = i.extent.value.replace(",", ".")
//     if (i.extent.value.startsWith("H") || i.extent.value.startsWith("h")){
//         var splittedString = i.extent.value.split(" ");
//         if (splittedString[1].includes("x") || splittedString[1].includes("X")){
//             i.extent.value = splittedString[1].split("x")[0]
//         } else {
//             i.extent.value = splittedString[1]
//         }
//     } else if (i.extent.value.includes("×")) {
//         var splittedString = i.extent.value.split(" ");
//         i.extent.value = splittedString[0]
//     }
// })
