function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;
    var saida = document.getElementById("saida");
  
    switch (operacao) {
      case "soma":
        resultado = num1 + num2;
        break;
        
      case "subtracao":
        resultado = num1 - num2;
        break;
        
      case "multiplicacao":
        resultado = num1 * num2;
        break;
        
      case "divisao":
        resultado = num1 / num2;
        break;
        
      default:
        alert("Operação inválida!");
        return;
    }

    saida.innerHTML = resultado;
  }