function printDNA(num) {

    let symbol = 'ATCGTTAGGG';
    let index = 0;

    let dna = [];

    for (let i = 1; i <= num; i++) {

        if (index > 8) {
            index = 0;
        }

        let currentDNA = symbol[index] + symbol[index + 1];

        dna.push(currentDNA);

        index += 2
    }

    for (let j = 0; j < dna.length; j++){

        let currentRow = dna[j];

        for (let r = 0; r < 6; r++){
            
        }

    }

}

printDNA(4);