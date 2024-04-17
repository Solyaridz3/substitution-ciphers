import {modInverse} from "./utils/utils.js";

const ALPHABET = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';

/**
 * Шифрує повідомлення за допомогою алгоритму Аффін.
 *
 * @param {string} message - Повідомлення, яке потрібно зашифрувати.
 * @param {number} a - Перший параметр алгоритму Аффін.
 * @param {number} b - Другий параметр алгоритму Аффін.
 * @returns {string} - Зашифроване повідомлення.
 */
export function encryptAffine(message, a, b) {
    // Ініціалізуємо порожній рядок для зберігання зашифрованого повідомлення
    let encryptMessage = "";
    for (const element of message) {
        // Перетворюємо символ у верхній регістр та знаходимо його індекс в ALPHABET
        let index = ALPHABET.indexOf(element.toUpperCase());
        // Якщо символ знаходиться в ALPHABET, зашифруємо його
        if (index !== -1) {
            // Використовуємо формулу алгоритму для обчислення зашифрованого символу
            let encryptChar = (a * index + b) % ALPHABET.length;
            encryptMessage += ALPHABET[encryptChar];
        } else {
            // Якщо символ не знаходиться в ALPHABET, додаємо його так, як є
            encryptMessage += element;
        }
    }
    // Повертаємо зашифроване повідомлення
    return encryptMessage;
}
/**
 * Розшифровує повідомлення, зашифроване за допомогою афінного шифру
 *
 * @param {string} message - Повідомлення
 * @param {number} a - Перший ключ
 * @param {number} b - Другий ключ
 * @returns {string} - Розшифроване повідомлення
 */
export function decryptAffine(message, a, b) {
    const m = ALPHABET.length;
    let decryptMessage = "";
    let aInverse = modInverse(a, m);
    for (const element of message) {
        let index = ALPHABET.indexOf(element.toUpperCase());
        if (index !== -1) {
            let decryptChar = aInverse * (index - b);
            while (decryptChar < 0) {
                decryptChar += m;
            }
            decryptChar %= m;
            decryptMessage += ALPHABET[decryptChar];
        } else {
            decryptMessage += element;
        }
    }
    return decryptMessage;
}

