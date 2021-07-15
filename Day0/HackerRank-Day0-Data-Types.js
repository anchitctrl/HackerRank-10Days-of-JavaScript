'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    console.log(parseInt(firstInteger)+parseInt(secondInteger));
    
    const firstDecimal = 4.0;
    console.log(parseFloat(firstDecimal)+parseFloat(secondDecimal));
    
    const firstString = 'HackerRank ';
    console.log(firstString+secondString);
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
