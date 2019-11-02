window.onload = function () {
    var oTxtNome = document.getElementById("nome");
    var oDivMsgNome = document.getElementById("msgNome");

    // Disparado quando o campo nome perder o foco.
    oTxtNome.onblur = function () {
        var nomeRegex = new RegExp("^[a-zA-Z \d]+$");
        if (oTxtNome.value.length == 0) {
            oDivMsgNome.style.color = "#fc0303";
            oDivMsgNome.innerHTML = "Digite o nome completo!";
        } else if (nomeRegex.test(oTxtNome.value) == false) {
            oDivMsgNome.style.color = "#fc0303";
            oDivMsgNome.innerHTML = "Nome inválido!";
        }
    }

    oTxtNome.oninput = function () {
        oDivMsgNome.innerHTML = "";
    }



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
        oDivMsgEmail.innerHTML = "";
    }


    var oTxtIdade = document.getElementById("idade");
    var oDivMsgIdade = document.getElementById("msgIdade");

    //Disparado quando o campo idade perder o foco.
    oTxtIdade.onblur = function () {
        if (oTxtIdade.value.length == 0) {
            oDivMsgIdade.style.color = "#fc0303";
            oDivMsgIdade.innerHTML = "Digite a idade!";
        } else if (oTxtIdade.value > 120) {
            oDivMsgIdade.style.color = "#fc0303";
            oDivMsgIdade.innerHTML = "Idade inválida!";
        }
    }

    oTxtIdade.oninput = function () {
        oDivMsgIdade.innerHTML = "";
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
        oDivMsgSenha.innerHTML = "";
    }
}