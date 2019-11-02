window.onload = function () {
    var oTxtPressao = document.getElementById("pressao");
    var oDivMsgPressao = document.getElementById("msgPressao");

    //Disparado quando o campo pressao perder o foco.
    oTxtPressao.onblur = function () {
        var pressaoRegex = new RegExp("^[0-9]+/[0-9]+$");
        if (oTxtPressao.value == 0)  {
            oDivMsgPressao.style.color = "#fc0303";
            oDivMsgPressao.innerHTML = "Digite a pressão!";
        } else if (pressaoRegex.test(oTxtPressao.value) == false) {
            oDivMsgPressao.style.color = "#fc0303";
            oDivMsgPressao.innerHTML = "Pressão inválida!";
        }
    }

    oTxtPressao.oninput = function () {
        oDivMsgPressao.innerHTML = "";
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

