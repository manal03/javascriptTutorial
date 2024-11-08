let theNumber = 0;
let entries = []
function userInputReturn() {
  return +userInput.value;
}

function outputLogs(operationIdentifier, userInput, initialNumber, resultNumber){
    const logEntries = {
        operation : operationIdentifier, 
        userInput : userInput,
        initialNumber : initialNumber,
        resultNumber : resultNumber
    }
    entries.push(logEntries);
    console.log(entries);
}
function writeOutput(operator, initialResult, nextNumber){
    const calDesc = `${initialResult} ${operator} ${nextNumber}`
    return calDesc;
}
function add() {
  const userInp = userInputReturn();
  const intital = theNumber;
  theNumber = theNumber + userInp;
  outputResult(theNumber, writeOutput('+', intital, userInp));
  outputLogs('ADD', userInp, intital, theNumber);
}

function subtract() {
  const userInp = userInputReturn();
  const intital = theNumber;
  theNumber = theNumber - userInp;
  outputResult(theNumber, writeOutput('-', intital, userInp));
  outputLogs('SUBTRACT', userInp, intital, theNumber);

}
function multiply() {
  const userInp = userInputReturn();
  const intital = theNumber;
  theNumber = theNumber * userInp;
  outputResult(theNumber, writeOutput('*', intital, userInp));
  outputLogs('MULTIPLY', userInp, intital, theNumber);

}
function divide() {
  const userInp = userInputReturn();
  const intital = theNumber;
  theNumber = theNumber / userInp;
  outputResult(theNumber, writeOutput('/', intital, userInp));
  outputLogs('DIVIDE', userInp, intital, theNumber);

}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
