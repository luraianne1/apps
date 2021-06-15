const senha_gerada = document.getElementById("senha_gerada2");
//const copyEl = document.getElementById("copy");
const tamanho = document.getElementById("tamanho");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const simbolo = document.getElementById("simbolo");
const generate = document.getElementById("gerarsenha");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = tamanho.value;

    let password = "";

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (number.checked) {
        password += getNumber();
    }

    if (simbolo.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    senha_gerada.innerHTML = password;
    alert(password);
}

function generateX() {
    const xs = [];
    if (upper.checked) {
        xs.push(getUppercase());
    }

    if (lower.checked) {
        xs.push(getLowercase());
    }

    if (number.checked) {
        xs.push(getNumber());
    }

    if (simbolo.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

gerarsenha.addEventListener("click", generatePassword);