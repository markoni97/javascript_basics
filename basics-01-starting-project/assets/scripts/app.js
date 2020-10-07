const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialReasult, enteredNumber);
}

function subctract(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('+', initialReasult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialReasult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialReasult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subctract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


