window.onload = function () {
    var oTxtEmail = document.getElementById("email");
    var oDivMsgEmail = document.getElementById("msgEmail");

    //Disparado quando o campo email perder o foco.
    oTxtEmail.onblur = function () {
        var emailRegex = new RegExp("^.+@.+$");
        if (oTxtEmail.value.length == 0) {
            oDivMsgEmail.style.color = "#fc0303";
            oDivMsgEmail.innerHTML = "Digite o email!";
        } else if (emailRegex.test(oTxtEmail.value) == false) {
            oDivMsgEmail.style.color = "#fc0303";
            oDivMsgEmail.innerHTML = "Email inválido!";
        }
    }

    oTxtEmail.oninput = function () {
        oDivMsgEmail.style.color = "#000000";
        oDivMsgEmail.innerHTML = "";
    }


    var oTxtSenha = document.getElementById("senha");
    var oDivMsgSenha = document.getElementById("msgSenha");

    // Disparado quando o campo senha perder o foco.
    oTxtSenha.onblur = function () {
        if (oTxtSenha.value.length == 0) {
            oDivMsgSenha.style.color = "#fc0303";
            oDivMsgSenha.innerHTML = "Digite a senha!";
        } else if (oTxtSenha.value.length > 8) {
            oDivMsgSenha.style.color = "#fc0303";
            oDivMsgSenha.innerHTML = "Senha inválida, deve conter até 8 caracteres!";
        }
    }

    oTxtSenha.oninput = function () {
        oDivMsgSenha.style.color = "#000000";
        oDivMsgSenha.innerHTML = "";
    }
}