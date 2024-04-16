const ALPHABET = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

/**
 * Лінійне шифрування
 * @param {string} text
 * @param {number} key
 * @return {string}
 */
export function linearEncrypt(text, key) {
    text = text.toUpperCase();
    let encryptedText = "";
    const m = ALPHABET.length;
    for (const element of text) {
        let char = element;
        let index = ALPHABET.indexOf(char);
        if (index === -1) {
            encryptedText += char;
        } else {
            let newIndex = (key * index) % m;
            encryptedText += ALPHABET[newIndex];
        }
    }

    return encryptedText;
}


/**
 * Лінійне дешифрування
 * @param {string} encryptedText
 * @param {number} key
 * @return {string}
 */
export function linearDecrypt(encryptedText, key) {
    encryptedText = encryptedText.toUpperCase();
    let decryptedText = "";
    const m = ALPHABET.length;
    let inverseKey = 1;
    while ((key * inverseKey) % m !== 1) {
        inverseKey++;
    }
    for (const element of encryptedText) {
        let char = element;
        let index = ALPHABET.indexOf(char);
        if (index === -1) {
            decryptedText += char;
        } else {
            let newIndex = (inverseKey * index) % m;
            if (newIndex < 0) newIndex += m;
            decryptedText += ALPHABET[newIndex];
        }
    }

    return decryptedText;
}
