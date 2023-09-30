function arrayRotation(arr1, n) {

    for (let i = 1; i <= n; i++) {
        arr1.push(arr1.shift());
    }
    console.log(arr1.join(" "));

}

    arrayRotation([51, 47, 32, 61, 21], 2 )