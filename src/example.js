import {caesarDeciphering, caesarCipher} from "./caesar.js";
import {linearEncrypt, linearDecrypt} from "./linear.js";
import {decryptAffine, encryptAffine} from "./affine.js";

const openMessage = "Я, Винарчук Сергій Олександрович, студент унівеститету";


// Цезарь
const shift = 3;
const encryptedMessage = caesarCipher(openMessage, shift);
const decryptedMessage = caesarDeciphering(encryptedMessage, shift);
console.log("Шифр цезаря");
console.log("Зашифрований текст:", encryptedMessage);
console.log("Розшифрований текст:", decryptedMessage);

// Лінійний
const key = 5; // Ключ повинен бути взаємно простим до розміру алфавіту
const encryptedText = linearEncrypt(openMessage, key);
const decryptedText = linearDecrypt(encryptedText, key);
console.log("Лінійний шифр");
console.log("Зашифрований текст:", encryptedText);
console.log("Розшифрований текст:", decryptedText);

// Афінний
const encrypted = encryptAffine(openMessage, 4, 2);
const decrypted = decryptAffine(encrypted, 4, 2);
console.log("Афінний шифр");
console.log(encrypted);
console.log(decrypted);
