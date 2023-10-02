function magicMatrices(arr) {
    let initialSum = 0;
    for (let num of arr[0]) {
        initialSum += num;
    }

    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumLine = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sumLine += arr[i][j];
        }
        if (sumLine != initialSum) {
            isMagic = false;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let sumColumn = 0;
        for (let j = 0; j < arr.length; j++) {
<<<<<<< HEAD
            sumColumn += arr[j][i];
        }
=======
            
            sumColumn += arr[j][i];
        }
        
>>>>>>> 9477bba31e5e75085ef8cea0e8fb4099c934a854
        if (sumColumn != initialSum) {
            isMagic = false;
        }
    }

    console.log(isMagic);

}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])
