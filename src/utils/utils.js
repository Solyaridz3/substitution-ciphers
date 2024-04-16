import readline from 'node:readline';
import fs from 'fs';

export function getAnswer(message) {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(message, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

export function getDataFromFIle(fileName) {
    return fs.readFileSync(`./inputFiles/${fileName}`, {encoding: 'utf-8', flag: 'r'});
}

export function writeDataToFile(fileName, data) {
    return fs.writeFileSync(`./outputFiles/${fileName}`, data, {encoding: 'utf-8'});
}
export function mutuallySimple(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a === 1;
}
