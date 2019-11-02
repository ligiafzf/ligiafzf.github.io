window.onload = function () {
    var oTxtAlimento = document.getElementById("alimento");
    var oDivMsgAlimento = document.getElementById("msgAlimento");

    // Disparado quando o campo alimento perder o foco.
    oTxtAlimento.onblur = function () {
        var alimentoRegex = new RegExp("^[a-zA-Z \d]+$");
        if (oTxtAlimento.value.length == 0) {
            oDivMsgAlimento.style.color = "#fc0303";
            oDivMsgAlimento.innerHTML = "Digite um alimento!";
        } else if (alimentoRegex.test(oTxtAlimento.value) == false) {
            oDivMsgAlimento.style.color = "#fc0303";
            oDivMsgAlimento.innerHTML = "Alimento inválido!";
        }
    }

    oTxtAlimento.oninput = function () {
        oDivMsgAlimento.innerHTML = "";
    }


    var oTxtQuantidade = document.getElementById("quantidade");
    var oDivMsgQuantidade = document.getElementById("msgQuantidade");

    //Disparado quando o campo quantidade perder o foco.
    oTxtQuantidade.onblur = function () {
        if (oTxtQuantidade.value.length == 0) {
            oDivMsgQuantidade.style.color = "#fc0303";
            oDivMsgQuantidade.innerHTML = "Digite a quantidade!";
        }
    }

    oTxtQuantidade.oninput = function () {
        oDivMsgQuantidade.innerHTML = "";
    }


    var oTxtCalorias = document.getElementById("calorias");
    var oDivMsgCalorias = document.getElementById("msgCalorias");

    //Disparado quando o campo quantidade perder o foco.
    oTxtCalorias.onblur = function () {
        if (oTxtCalorias.value.length == 0) {
            oDivMsgCalorias.style.color = "#fc0303";
            oDivMsgCalorias.innerHTML = "Digite as calorias!";
        }
    }

    oTxtCalorias.oninput = function () {
        oDivMsgCalorias.innerHTML = "";
    }
}