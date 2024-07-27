function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Adicione aqui a lógica para autenticação, como uma chamada a uma API.
    console.log("Login com Email:", email, "Senha:", password);
    $('#loginModal').modal('hide');
}

function showSignup() {
    $('#loginModal').modal('hide');
    $('#signupModal').modal('show');
}

function signup() {
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Adicione aqui a lógica para criar uma nova conta, como uma chamada a uma API.
    console.log("Criar conta com Email:", email, "Senha:", password);
    $('#signupModal').modal('hide');
}

function submeteHTML() {
    var html = document.getElementById("entrada").value;
    var arr3 = html.match(/chat.whatsapp.com\/([a-zA-Z0-9]*[a-zA-Z0-9])/g);
    console.log(arr3);
    document.getElementById("saida").value = "";
    document.getElementById("saidaLink").innerHTML = "";

    // Mostrar o indicador de carregamento
    document.getElementById("loading").classList.remove("hidden");

    // Simular atraso para feedback visual
    setTimeout(() => {
        if (arr3) {
            // Remover links duplicados
            arr3 = [...new Set(arr3)];
            arr3.forEach(preencherURL);
        }

        // Ocultar o indicador de carregamento
        document.getElementById("loading").classList.add("hidden");
    }, 1000); // Ajuste o tempo conforme necessário
}

function preencherURL(url) {
    var sanitizedUrl = url.replace(/[<>]/g, ""); // Sanitização básica
    document.getElementById("saida").value += "https://" + sanitizedUrl + '\r\n';
    document.getElementById("saidaLink").innerHTML += 
        "<a href='https://" + sanitizedUrl + "' target='_blank'>https://" + sanitizedUrl + "</a><br />";
}

function colarTexto() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("entrada").value = text;
    }).catch(err => {
        console.error('Erro ao colar texto:', err);
    });
}

function copiarTexto() {
    var saida = document.getElementById("saida");
    saida.select();
    document.execCommand("copy");
    mostrarFeedback();
}

function limparTudo() {
    document.getElementById("entrada").value = "";
    document.getElementById("saida").value = "";
    document.getElementById("saidaLink").innerHTML = "";
}

function mostrarFeedback() {
    var feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden");
    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 2000);
}

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
