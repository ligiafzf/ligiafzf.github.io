window.onload = function () {
    var oTxtPeso = document.getElementById("peso");
    var oDivMsgPeso = document.getElementById("msgPeso");

    //Disparado quando o campo peso perder o foco.
    oTxtPeso.onblur = function () {
    
    if (oTxtPeso.value == 0)  {
        oDivMsgPeso.style.color = "#fc0303";
        oDivMsgPeso.innerHTML = "Digite o peso!";
    } else if (oTxtPeso.value > 250) {
        oDivMsgPeso.style.color = "#fc0303";
            oDivMsgPeso.innerHTML = "Peso inválido!";
    }
    }
    oTxtPeso.oninput = function () {
        oDivMsgPeso.innerHTML = "";
    } 


    var oTxtData = document.getElementById("data");     
    var oDivMsgData = document.getElementById("msgData");

    //Disparado quando o campo data perder o foco.
    oTxtData.onblur = function () {
        var dataRegex = new RegExp("^\\d{1,2}/\\d{1,2}/\\d{4}$");
        if (oTxtData.value.length == 0) {
            oDivMsgData.style.color = "#fc0303";
            oDivMsgData.innerHTML = "Digite a data!";
        } else if (dataRegex.test(oTxtData.value) == false) {
            oDivMsgData.style.color = "#fc0303";
            oDivMsgData.innerHTML = "Data inválida!";
        }
    }

    oTxtData.onchange = function () {
        oDivMsgData.innerHTML = "";
    }
}

