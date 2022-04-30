const reservedKeywords: string[] = [
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

enum CLASS_NAMES {
    CORRECT = 'correct',
    INCORRECT = 'incorrect'
}

const input = document.querySelector('input') as HTMLInputElement;
const errorPara = document.querySelector('p') as HTMLParagraphElement;
const button = document.querySelector('button') as HTMLButtonElement;

const search: <Type>(arr: Type[], element: Type) => boolean = (arr, element) => {
    let start: number = 0;
    let end: number = arr.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);

        if(arr[mid] === element) return true;

        if(arr[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return false;
}

const displayMessage: (message: string) => void = (message) => {
    errorPara.textContent = message;
}

const changeStyle: (element: HTMLInputElement, isValid: boolean | undefined) => void = (element, isValid) => {
    if(isValid === undefined) {
        element.className = '';
    }
    else {
        if(isValid) {
            element.className = CLASS_NAMES.CORRECT;
        }
        else {
            element.className = CLASS_NAMES.INCORRECT;
        }
    }
}

const validate: (input: string) => string | boolean = inputVal => {
    if (inputVal.length === 0) {
        return "Please enter a variable name";
    }
    if (inputVal[0].match(/\W/) || inputVal[0].match(/\d/)) {
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
}

button.addEventListener('click', () => {
    const inputVal: string = input.value;

    let message: string = "";
    let isValid: boolean = false;

    const validationResult: string | boolean = validate(inputVal);

    if(typeof validationResult === 'boolean') {
        isValid = validationResult;
    }
    else {
        message = validationResult;
    }

    displayMessage(message)
    changeStyle(input, isValid);

    input.focus();
});

input.addEventListener('keydown', () => {
    displayMessage('');
    changeStyle(input, undefined);
});