let activeColorScheme
const Dark_Mode = ["#ffffff","#000000",]
const Light_Mode = ["#000000","#ffffff",]
const CalcDisplay = document.getElementById('display');
let functionStatus

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function stringParser_and_evaluator (elementID) {
  let string = document.getElementById(elementID).innerText
  var lastOpenPara = -1
  var lastClosePara = -1
  
  while (((string.includes("(") && string.includes(")"))) || (!string.includes("(") && !string.includes(")"))) { 
    for (i=0;i<string.length;i++) {
      if (string[i]=="(") {
        lastOpenPara=i
      } else if (string[i]==")") {
        lastClosePara=i
      }

      if (string[lastOpenPara] === "(" && string[lastClosePara] === ")") {
        while (string.substring(lastOpenPara,lastClosePara+1).includes("^")) {
          let leftSideNum
          let rightSideNum
          let indexPow = string.substring(lastOpenPara,lastClosePara+1).indexOf("^")

          for (let i=indexPow-1;i <= 0;i--) { //Left side
            // This for loop should loop back indexes from indexPow and check if every index before that is a num and add it to leftSide array if not a num it should cut the array then turn it into a string using toString()
            if (Number.isInteger(string.substring(lastOpenPara,lastClosePara+1)[i])){
              leftSideNum.push(string.substring(lastOpenPara,lastClosePara+1)[i])
              } else {
                break
              }
          }

          for (let i=indexPow+1;i >= string.substring(lastOpenPara,lastClosePara+1).length;i++) { // Right side
            // This for loop should loop forward indexes from indexPow and check if every index after that is a num and add it to rightSide array if not a num it should cut the array then turn it into a string using toString()
            if (Number.isInteger(string.substring(lastOpenPara,lastClosePara+1)[i])){
              rightSideNum.push(string.substring(lastOpenPara,lastClosePara+1)[i])
            } else {
              break
            }
          }

          leftSideNum = Number(leftSideNum.reverse().join(''))
          rightSideNum = Number(rightSideNum.join(''))
          PowEval = Math.pow(leftSideNum,rightSideNum)
          string.replace(string.substring(string.substring.indexOf("^")-leftSideNum.length,string.substring("^")+rightSideNum.length),String(PowEval))
        }

        while (!string.substring(lastOpenPara,lastClosePara+1).includes("^") && string.substring(lastOpenPara,lastClosePara+1).includes("/")){
          // Trying to follow PEMDAS
          // Unfinished
        }
      }
    }
  }
}

function inputWarningCheck_and_FloatWarning() {
  if (document.getElementById('display').innerText.includes('=')){
    functionStatus = 'equation'
  } else {
    functionStatus = 'expression'
  }
  if (CalcDisplay.innerText.includes('.')){
    document.getElementById('Decimal Float Warning').hidden = false
  }
}

function JXGraphsShow () {
  //empty for now
}

function valueOfX () {
  const xValue = null
  //Work on this once all numerical functions work
}

function valueOfY () {
  const yValue = null
  // Check valueOfX
}

function valueOfZ () {
  const zValue = null
  // Check valueOfX and valueOfY
}

function inputChangeCheck() {
  inputWarningCheck_and_FloatWarning();
  /*JXGraphsShow ();
  valueOfX();
  if (CalcDisplay.innerText.includes("y") || CalcDisplay.innerText.includes("Y")) {
    valueOfY();
  }
  if (CalcDisplay.innerText.includes("z") || CalcDisplay.innerText.includes("Z")) {
    valueOfZ();
  }
  */
}