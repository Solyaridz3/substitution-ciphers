import {getAnswer, getDataFromFIle, writeDataToFile, getMutuallySimpleKey} from "./utils/utils.js";
import {caesarCipher, caesarDeciphering} from "./caesar.js";
import {linearEncrypt, linearDecrypt} from "./linear.js";
import {encryptAffine, decryptAffine} from "./affine.js";

/**
 * Головна функція, яка обробляє шифрацію та дешифрацію на основі обраного шифру.
 * Запитує користувача на вибір шифру, імені вхідного та вихідного файлів, а також виконує операції шифрації та дешифрації відповідно.
 */
async function main() {
    // Доступні шифри
    const ciphers = ['цезарь', 'лінійний', 'афінний'];

    const cipher = await getAnswer(`Оберіть шифр [${ciphers.join('/')}]: `);

    const inputFileName = await getAnswer("Оберіть ім'я вхідного файлу з папки inputFiles, наприклад test.txt: ");

    const outputFileName = await getAnswer("Оберіть ім'я вихідного файлу, наприклад test.txt: ");
    // Отримання даних з вказаного вхідного файлу
    const message = getDataFromFIle(inputFileName);

    let encrypted, decrypted;

    // Виконання операцій в залежності від обраного шифру
    if (cipher === 'цезарь') {
        // Запит користувачу на введення значення зсуву для шифру Цезаря
        const shift = Number(await getAnswer("Введіть зсув: "));
        encrypted = caesarCipher(message, shift);
        decrypted = caesarDeciphering(encrypted);
    }

    if (cipher === 'лінійний') {
        const key = await getMutuallySimpleKey()
        encrypted = linearEncrypt(message, key);
        decrypted = linearDecrypt(encrypted, key);
    }

    if (cipher === 'афінний') {
        const key = await getMutuallySimpleKey()
        let secondKey = Number(await getAnswer("Введіть другий ключ шифрування, наприклад 8: "));
        encrypted = encryptAffine(message, key, secondKey);
        decrypted = decryptAffine(encrypted, key, secondKey);
    }

    // Запис зашифрованих даних у вихідний файл
    writeDataToFile(outputFileName, encrypted);

    // Запис розшифрованих даних у файл з префіксом 'deciphered_'
    writeDataToFile('deciphered_' + outputFileName, decrypted);

    console.log('Виконано!')
}

main()




