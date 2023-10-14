function arrayManipulator(nums, commands) {

    for (let command of commands) {
        let token = command.split(' ');
        let action = token[0];

        if (action == 'add') {
            let idx = Number(token[1]);
            let el = Number(token[2]);
            nums.splice(idx, 0, el);

        } else if (action == 'addMany') {
            let idx = Number(token[1]);
            let elementsToAdd = token.slice(2);
            for (let num of elementsToAdd) {
                nums.splice(idx, 0, num);
                idx++;
            }

        } else if (action == 'contains'){
            let el = Number(token[1]);
            console.log(nums.indexOf(el));

        } else if (action == 'remove'){
            let idx = Number(token[1]);
            nums.splice(idx, 1);

        } else if (action == 'shift'){
            let rotations = Number(token[1]);
            for (let rotation = 1; rotation <= rotations; rotation++){
                let firstNum = nums.shift();
                nums.push(firstNum);
            }

        } else if (action == 'sumPairs'){
            let pairedArr = [];

            for (let i = 0; i < nums.length; i+= 2){

                if (i + 1 < nums.length){
                    pairedArr.push(nums[i] + nums[i+1]);
                } else {
                    pairedArr.push(nums[i]);
                }
            }
            nums = pairedArr;

        } else if (action == 'print'){
            console.log(`[${nums.join(', ')} ]`);

        }

    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
    'shift 1', 'print']    
)