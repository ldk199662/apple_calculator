const display1 = document.querySelector(".displayOne");
const display2 = document.querySelector(".displayTwo");
const resultE = document.querySelector(".result");

const numbersE = document.querySelectorAll(".number");

const operationE = document.querySelectorAll(".operation");

const equalE = document.querySelector(".equal");

const clearAllE = document.querySelector(".clear");

let disOne = "";
let disTwo = "";
let result = null;
let operations = "";
let duplicateCheck = false;


  // 계산
  function mathOperation() {
    if(operations === "×") {
        result = parseFloat(result) * parseFloat(disTwo);
    } else if(operations === "+") {
        result = parseFloat(result) + parseFloat(disTwo);
    } else if(operations === "−") {
        result = parseFloat(result) - parseFloat(disTwo);
    } else if(operations === "÷") {
        result = parseFloat(result) / parseFloat(disTwo);
    } else if(operations === "%") {
        result = parseFloat(result) % parseFloat(disTwo);
    }
  }
  
  numbersE.forEach(number =>{
    number.addEventListener("click", (el)=>{
        if(el.target.innerText === "." && !duplicateCheck){
            duplicateCheck = true;
        }else if(el.target.innerText === "." && duplicateCheck){
            return;
        }
        disTwo += el.target.innerText;
        display2.innerText = disTwo;
    })
})

operationE.forEach(operation => {
    operation.addEventListener("click", (el)=>{
        if(!disTwo){
            return;
        }
        duplicateCheck = false;

        const operationSymbol = el.target.innerText;

        if(disOne && disTwo && operations){
            mathOperation();
        }
        else {
            result = parseFloat(disTwo);
        }
        clearVar(operationSymbol);
        operations = operationSymbol;
    })
})

function clearVar(symbol = "") {
    disOne += `${disTwo} ${symbol} `;
    display1.innerText = disOne;
    display2.innerText = "";
    disTwo = "";
    resultE.innerText = result;
  }
  
  equalE.addEventListener("click", (e) => {
    if(!disOne || !disTwo) {
      return;
    }
    duplicateCheck = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    resultE.innerText = "";
    disTwo = result;
    disOne = "";
  })
  

  clearAllE.addEventListener("click", (e) => {
    display1.innerText = "0";
    display2.innerText = "0";
    disOne = "";
    disTwo = "";
    result = "";
    resultE.innerText = "0";
    duplicateCheck = false;
  })
  

  function clickButtonEl(key) {
    numbersE.forEach(bt => {
        if(bt.innerText === key) {
            bt.click();
        }
    })
  };
  

  function clickOperation(key) {
    operationE.forEach(bt => {
        if(bt.innerText === key) {
            bt.click();
        }
    })
  };
  
  function ClickEqual() {
    equalE.click();
  };




  // 키보드로도 계산 가능

   window.addEventListener("keydown", (e) => {
    
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
    } else if(
        e.key === "+" ||
        e.key === "/" ||
        e.key === "%"
    ) {
        clickOperation(e.key);
    } else if(e.key === "*") {
        clickOperation("×");
    } else if(e.key === "-") {
        clickOperation("−");
    } else if(e.key === "?") {
        clickOperation("÷");
    } else if(e.key === "Enter" || e.key === "=") {
        ClickEqual();
    }
  });