import results from './data/results.json'
// import cleanData from './lib/cleanYears'

const rawData = results.results.bindings

// main function
function main() {
	convertData(rawData);
}

function splitStringCalcAverage(data) {
    var splittedString = data.split("-")
    return average(splittedString[0], splittedString[1])
}

function average(a, b) {
    // force the input as numbers *1
    return Math.round((a*1 + b*1) /2);
}


function clearDateString(data) {
    data.value = data.value.toLowerCase();

    if(data.value && typeof data.value === "string") {
        // Remove Spaces
        data.value = data.value.replace(/\s+/g, '');

        // BC / AD checker
        if (data.value.includes("bc")) {
            data.bcValue = true
            data.value = data.value.replace('bc', "");
            if (data.value.includes("ad")) {
                data.adValue = true
                data.value = data.value.replace('ad', "");
            } else {
                data.adValue = false
            }
        } else {
            data.bcValue = false
        }

        // eeuw checker
        if (data.value.includes("eeuw")) {
            data.eeuw = true
            data.value = data.value.replace('eeuw', "");
        } else if (data.value.includes("th")) {
            data.value = data.value.replace(/\t.*/,'');
            data.eeuw = true
        } else {
            data.eeuw = false
        }

        // odd ones
        if (data.value.includes("2hlft19") || data.value.includes("20evoor1971")) {
            data.value = "0"
        }

        // replace loop met een array en RegExp
        var replaceArr = ["a","b","c","d","e","f","g","h","i","j","k","l","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", /\(/, /\)/, /\./, , /\?/]
        replaceArr.forEach(el => data.value = data.value.replace(new RegExp(el, "g"), ""))

        // Replace / met -
        if (data.value.includes("/")) {
            data.value = data.value.replace('/', "-");
        }
    }

    return data
}


function clearMedium(data) {
    data.value = data.value.toLowerCase();
    var replaceArr = ["ijzer","hout","brons","aarde", "klei", "koper", "goud", "papier"]
    replaceArr.forEach(el => {
        if (data.value.includes(el)) {
            data.value = el
        }
    })
    return data
}

function convertData(item) {
	item.map(el => {
        var clearedStringsDate = clearDateString(el.date)
        var clearedStringsMedium = clearMedium(el.mediumLabel)

        if (clearedStringsDate.eeuw == false){
            if (clearedStringsDate.value.includes("-")) {
                clearedStringsDate.value = splitStringCalcAverage(clearedStringsDate.value);
            }
        } else if (clearedStringsDate.eeuw == true) {
            if (!clearedStringsDate.value.includes("-")) {
                if (clearedStringsDate.value.length >= 3) {
                    clearedStringsDate.value = clearedStringsDate.value.split("2")[1]
                }
            }
        }
        // console.log(clearedStrings.value)
	})

	let newArr = item;
	return newArr;
}

main();
