import {getAnswer, getDataFromFIle, writeDataToFile, mutuallySimple} from "./utils/utils.js";
import {caesarCipher, caesarDeciphering} from "./caesar.js";
import {linearEncrypt, linearDecrypt} from "./linear.js";
import {encryptAffine, decryptAffine} from "./affine.js";

async function main() {
    const ciphers = ['цезарь', 'лінійний', 'aфінний'];
    const cipher = await getAnswer(`Оберіть шифр [${ciphers.join('/')}]: `);
    const inputFileName = await getAnswer("Оберіть ім'я вхідного файлу, наприклад test.txt: ");
    const outputFileName = await getAnswer("Оберіть ім'я вихідного файлу, наприклад test.txt: ");
    const message = getDataFromFIle(inputFileName);
    let encrypted, decrypted;
    if (cipher === 'цезарь') {
        const shift = Number(await getAnswer("Введіть зсув: "));
        encrypted = caesarCipher(message, shift);
        decrypted = caesarDeciphering(encrypted);
    }
    if (cipher === 'лінійний') {
        let key = Number(await getAnswer("Введіть ключ шифрування, наприклад 5: "));
        while (!mutuallySimple(key, 33)) {
            console.log("Ключ повинен бути взаємно простим до довжини алфавіту (33)")
            key = Number(await getAnswer("Введіть ключ шифрування, наприклад 5: "));
        }

        encrypted = linearEncrypt(message, key);
        decrypted = linearDecrypt(encrypted, key);
    }
    if (cipher === 'афінний') {
        let key = Number(await getAnswer("Введіть ключ шифрування, наприклад 5: "));
        while (!mutuallySimple(key, 33)) {
            console.log("Ключ повинен бути взаємно простим до довжини алфавіту (33)")
            key = Number(await getAnswer("Введіть ключ шифрування, наприклад 5: "));
        }
        let secondKey = Number(await getAnswer("Введіть другий ключ шифрування, наприклад 8: "));

        encrypted = encryptAffine(message, key, secondKey);
        decrypted = decryptAffine(encrypted, key, secondKey);
    }
    writeDataToFile(outputFileName, encrypted);
    writeDataToFile('deciphered_' + outputFileName, decrypted);
    console.log('Виконано!')
}

main()


