const defaultResult = 0;
let currentResult = defaultResult;


//Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor file
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


