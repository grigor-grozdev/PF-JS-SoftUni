function solve(input) {

    let arr = input.split('\\');

    let items = arr.pop().split('.');

    let extension = items.pop();

    console.log(`File name: ${items.join('.')}`)
    console.log(`File extension: ${extension}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')