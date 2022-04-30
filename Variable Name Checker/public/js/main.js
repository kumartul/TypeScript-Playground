"use strict";
const reservedKeywords = [
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'null',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
    'enum',
    'implments',
    'interface',
    'let',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'true',
    'yield',
];
var CLASS_NAMES;
(function (CLASS_NAMES) {
    CLASS_NAMES["CORRECT"] = "correct";
    CLASS_NAMES["INCORRECT"] = "incorrect";
})(CLASS_NAMES || (CLASS_NAMES = {}));
const input = document.querySelector('input');
const errorPara = document.querySelector('p');
const button = document.querySelector('button');
const search = (arr, element) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === element)
            return true;
        if (arr[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return false;
};
const displayMessage = (message) => {
    errorPara.textContent = message;
};
const changeStyle = (element, isValid) => {
    if (isValid === undefined) {
        element.className = '';
    }
    else {
        if (isValid) {
            element.className = CLASS_NAMES.CORRECT;
        }
        else {
            element.className = CLASS_NAMES.INCORRECT;
        }
    }
};
const validate = inputVal => {
    if (inputVal.length === 0) {
        return "Please enter a variable name";
    }
    if (inputVal[0].match(/\W/) || inputVal.match(/\d/)) {
        return "First character must be a letter or underscore (_)";
    }
    if (inputVal.match(/\s+/)) {
        return "Variable name cannot contain spaces";
    }
    if (inputVal.match(/\W+/)) {
        return "Variable name can only contain letters, numbers, and underscores (_)";
    }
    if (search(reservedKeywords, inputVal)) {
        return "Variable name cannot be a reserved keyword";
    }
    return true;
};
button.addEventListener('click', () => {
    const inputVal = input.value;
    let message = "";
    let isValid = false;
    const validationResult = validate(inputVal);
    if (typeof validationResult === 'boolean') {
        isValid = validationResult;
    }
    else {
        message = validationResult;
    }
    displayMessage(message);
    changeStyle(input, isValid);
    input.focus();
});
input.addEventListener('keydown', () => {
    displayMessage('');
    changeStyle(input, undefined);
});
