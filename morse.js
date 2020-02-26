const morseCode = {
    "a":"._",
    "b":"_...",
    "c":"_._.",
    "d":"_..",
    "e":".",
    "f":".._.",
    "g":"__.",
    "h":"....",
    "i":"..",
    "j":".___",
    "k":"_._",
    "l":"._..",
    "m":"__",
    "n":"_.",
    "o":"___",
    "p":".__.",
    "q":"__._",
    "r":"._.",
    "s":"...",
    "t":"_",
    "u":".._",
    "v":"..._",
    "w":".__",
    "x":"_.._",
    "y":"_.__",
    "z":"__..",
    "0":"_____",
    "1":".____",
    "2":"..___",
    "3":"...__",
    "4":"...._",
    "5":".....",
    "6":"_....",
    "7":"__...",
    "8":"___..",
    "9":"____.",
    " ":"       ",
    "&":".-...",
    "'":".----.",
    "@":".--.-.",
    ")":"-.--.-",
    "(":"-.--.",
    ":":"---...",
    ",":"--..--",
    "=":"-...-",
    "!":"-.-.--",
    ".":".-.-.-",
    "-":"-....-",
    "+":".-.-.",
    '"':".-..-.",
    "?":"..--..",
};

const translate = list => {
    return list.split("").map(convertToMorse).join(" ");
}

const convertToMorse = letter => {
    return morseCode[letter];
}

const writeOutput = () => {
    let input = document.getElementById("input").value.toLowerCase();
    document.getElementById("output").value = translate(input);
}

document.getElementById("submit").addEventListener("click", writeOutput);




const changeToWords = morseLetter => {
    return Object.keys(morseCode).find(key => morseCode[key] === morseLetter);
}

const translateInput = () => {
    document.getElementById("output").innerHTML = "";
    //split input separated by spaces into an array
    const getInput = document.getElementById("input").value.toLowerCase().split(" ");
    
    //check to see if input is morse. If so run function to translate
    if (getInput[0].includes(".") || (getInput.includes("_"))) {
        const convertedMorse = getInput.map(changeToWords);
        document.getElementById("output").innerHTML = convertedMorse.join("");
    }
    
    else {
        const changeToMorse = getInput.map(convertWord);
        document.getElementById("output").innerHTML = changeToMorse.join("");
    }
}