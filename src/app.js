import results from './data/results.json'
// import cleanData from './lib/cleanYears'

const rawData = results.results.bindings

function main() {
	convertYear(rawData);
}

console.log(splitStringCalcAverage(results.results.bindings[10].date.value))

function splitStringCalcAverage(data) {
    var splittedString = data.split("-")
    return average(splittedString[0], splittedString[1])
}

function average(a, b) {
    // force the input as numbers *1
    return Math.round((a*1 + b*1) /2);
}

function clearDateString(data) {
    data.value = data.value.toUpperCase();


    if(data.value && typeof data.value === "string") {
        // Remove Spaces
        data.value = data.value.replace(/\s+/g, '');

        if (data.value.includes("BC")) {
            data.bcValue = true
            data.value = data.value.replace('BC', "");
            if (data.value.includes("AD")) {
                data.adValue = true
                data.value = data.value.replace('AD', "");
            } else {
                data.adValue = false
            }
        } else {
            data.bcValue = false
        }

        if (data.value.includes("EEUW")) {
            data.eeuw = true
            data.value = data.value.replace('EEUW', "");

            if (data.value.includes("VROEG")) {
                data.value = data.value.replace('VROEG', "");

                if (data.value.includes("E")) {
                    data.value = data.value.replace(/E/g, "");
                }
            } else if (data.value.includes("MIDDEN")) {
                data.value = data.value.replace('MIDDEN', "");
                if (data.value.includes("E")) {
                    data.value = data.value.replace(/E/g, "");
                }
            } else if (data.value.includes("E")) {
                data.value = data.value.replace(/E/g, "");
            }

        } else if (data.value.includes("TH")) {
            data.value = data.value.replace(/\T.*/,'');
            data.eeuw = true
        } else {
            data.eeuw = false
        }

        if (data.value.includes("CA")) {
            data.value = data.value.replace('CA.', "");
        }
        if (data.value.includes("NA")) {
            data.value = data.value.replace('NA', "");
        }
        if (data.value.includes("C.")) {
            data.value = data.value.replace('C.', "");
        }
        if (data.value.includes("D")) {
            data.value = data.value.replace('D', "");
        }
        if (data.value.includes("CIRCA")) {
            data.value = data.value.replace('CIRCA', "");
        }
        if (data.value.includes("(VOOR")) {
            data.value = data.value.replace('(VOOR', "");
        }
        if (data.value.includes("VOOR")) {
            data.value = data.value.replace(/VOOR/g, "");
        }

        if (data.value.includes("ST")) {
            data.value = data.value.replace('ST', "");
        }


        if (data.value.includes("(")) {
            data.value = data.value.replace(/ *\([^)]*\) */g, '');
        } else if (data.value.includes(")")) {
            data.value = data.value.replace(")", '');
        }


        if (data.value.includes("-")) {
            data.value = data.value.replace('CIRCA', "");
        }
        if (data.value.includes("/")) {
            data.value = data.value.replace('/', "-");
        }

        if (data.value.includes("?")) {
            data.value = data.value.replace('?', "");
        }
        if (data.value.includes("20-20THCNTURY")){
            data.value = data.value.replace('20-20THCNTURY', "20");
            data.eeuw = "0"
        }
        if (data.value.includes("SCHAAL") || data.value.includes("2HLFT19")) {
            data.value = "0"
        }
    }

    return data
}


function convertYear(item) {
    // item = clearDateString(item)
    // var type = checkType(item)
    //
    // if (type === "simple"){
    //     return averageSimpleYear(item)
    // }
	item.map(el => {

        var clearedStrings = clearDateString(el.date)

        // console.log(clearedStrings)

        if (clearedStrings.value.includes("-")) {
            if (clearedStrings.eeuw == false){
                clearedStrings.value = splitStringCalcAverage(clearedStrings.value);
                console.log(clearedStrings.value)
            }
        }



        // Heb ik average nodig, check ik hier

	})

	let newArr = item;
	return newArr;
}

main();

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
