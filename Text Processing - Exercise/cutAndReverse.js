function cutAndReverse(str) {

    let middleindex = str.length / 2;

    let leftHalf = str.slice(0, middleindex).split('').reverse().join('');
    console.log(leftHalf);

    let rightHalf = str.slice(middleindex).split('').reverse().join('');
    console.log(rightHalf);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT' )