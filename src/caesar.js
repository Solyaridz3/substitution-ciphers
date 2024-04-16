/**
 * Функція що шифрує повідомлення шифром цезаря використовуючи український алфавіт,
 * при цьому зберігаючи те чи літера було в uppercase case чи lower case
 * @param {string} message - Надане повідомлення
 * @param {number} shift - Зміщення (k)
 * */
export function caesarCipher(message, shift) {
    const alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const lowerAlphabet = alphabet.toLowerCase();
    const m = alphabet.length;
    shift = shift % m; // Беремо до уваги довжину алфавіту
    return message.split('').map(char => {
        // Визначає чи поточна літера в uppercase
        const isCharUppercase = char.toUpperCase() === char;
        // В залежності від змінної визначає чи слід викормстовувати lowercase чи uppercase алфавіт
        const currentAlphabet = isCharUppercase ? alphabet : lowerAlphabet;
        if (currentAlphabet.includes(char)) {
            let index = currentAlphabet.indexOf(char);
            index = (index + shift) % m;
            if (index < 0) index += m;
            return currentAlphabet[index];
        } else {
            return char;
        }
    }).join('');
}


/**
 * Функція що дешифрує повідомлення шифром цезаря використовуючи український алфавіт,
 * при цьому зберігаючи те чи літера було в uppercase case чи lower case
 * Якщо зсув не наданий за замовчанням він буде дорівнювати 3
 * @param {string} message - Надане повідомлення
 * @param {number} shift - Зміщення (k)
 * */
export function caesarDeciphering(message, shift = 3) {
    const alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const m = alphabet.length;
    const lowerAlphabet = alphabet.toLowerCase();
    shift = shift % m;
    return message.split('').map(char => {
        // Визначає чи поточна літера в uppercase
        const isCharUppercase = char.toUpperCase() === char;
        // В залежності від змінної визначає чи слід викормстовувати lowercase чи uppercase алфавіт
        const currentAlphabet = isCharUppercase ? alphabet : lowerAlphabet;
        if (currentAlphabet.includes(char)) {
            let index = currentAlphabet.indexOf(char);
            index = (index + m - shift) % m;
            return currentAlphabet[index];
        } else {
            return char;
        }
    }).join('');
}



