function printIndicesTwice(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

var testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

printIndicesTwice(testArr)