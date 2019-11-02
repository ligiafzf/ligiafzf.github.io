window.onload = function () {
    var oTxtAtividade = document.getElementById("atividade");
    var oDivMsgAtividade = document.getElementById("msgAtividade");

    //Disparado quando o campo atividade perder o foco.
    oTxtAtividade.onblur = function () {
        var atividadeRegex = new RegExp("^[a-zA-Z \d]+$");
        if (oTxtAtividade.value.length == 0) {
            oDivMsgAtividade.style.color = "#fc0303";
            oDivMsgAtividade.innerHTML = "Digite uma atividade!";
        } else if (atividadeRegex.test(oTxtAtividade.value) == false) {
            oDivMsgAtividade.style.color = "#fc0303";
            oDivMsgAtividade.innerHTML = "Atividade inválida!";
        }
    }

    oTxtAtividade.oninput = function () {
        oDivMsgAtividade.innerHTML = "";
    }


    var oTxtTempo = document.getElementById("tempo");
    var oDivMsgTempo = document.getElementById("msgTempo");

    //Disparado quando o campo atividade perder o foco.
    oTxtTempo.onblur = function () {
        if (oTxtTempo.value.length == 0) {
            oDivMsgTempo.style.color = "#fc0303";
            oDivMsgTempo.innerHTML = "Digite a duração!";
        }
    }

    oTxtTempo.oninput = function () {
        oDivMsgTempo.innerHTML = "";
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
