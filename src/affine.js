export function modInverse(a, m) {
    a = (a % m + m) % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return 1;
}

const alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';

export function decryptAffine(message, a, b) {
    let decryptMessage = "";
    let aInverse = modInverse(a, alphabet.length);
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i].toUpperCase());
        if (index !== -1) {
            let decryptChar = aInverse * (index - b);
            while (decryptChar < 0) {
                decryptChar += alphabet.length;
            }
            decryptChar %= alphabet.length;
            decryptMessage += alphabet[decryptChar];
        } else {
            decryptMessage += message[i];
        }
    }
    return decryptMessage;
}

export function encryptAffine(message, a, b) {
    let encryptMessage = "";
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i].toUpperCase());
        if (index !== -1) {
            let encryptChar = (a * index + b) % alphabet.length;
            encryptMessage += alphabet[encryptChar];
        } else {
            encryptMessage += message[i];
        }
    }
    return encryptMessage;
}
