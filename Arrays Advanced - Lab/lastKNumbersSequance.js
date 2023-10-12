function sumLastKNumbersSequence(n, k) {

    let seq = [1];
   
    for (let current = 1; current < n; current++) {
   
    let start = Math.max(0, current - k);
    let end = current - 1;
    let sum = 0;
   
       for (let j = start; j <= end; j++){
   sum += seq[j]
   }
   
    seq[current] = sum;
    }
    console.log(seq.join(' '));
   }
   
   sumLastKNumbersSequence(8, 2);