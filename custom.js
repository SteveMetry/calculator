function reset() {
    document.getElementById("resultContainer").innerHTML = "";
    document.getElementById("typed").innerText = "";
  }
  
  function undo() {
    document.getElementById("typed").innerText = document.getElementById("typed").innerText.slice(0, -1);
  }
  
  function process(operation) {
    switch (operation) {
      case 'left':
        document.getElementById("typed").innerText += "(";
        break;
      case 'right':
        document.getElementById("typed").innerText += ")";
        break;
      default:
        document.getElementById("typed").innerText += operation;
        break;
    }
  }
  
  function compute() {
    const resultStr = document.getElementById("typed").innerText;
    const resultChildren = document.getElementById("resultContainer").children;
    if (resultChildren.length === 3) {
      document.getElementById("resultContainer").removeChild(resultChildren[0]);
    }
    const newResult = document.createElement("p");
    newResult.innerText = `${resultStr}\n= ${eval(resultStr)}\n`;
    document.getElementById("resultContainer").appendChild(newResult);
    document.getElementById("typed").innerText = "";
  }
  