function submeteHTML() {
    var html = document.getElementById("entrada").value;
    var arr3 = html.match(/chat.whatsapp.com\/([a-zA-Z0-9]*[a-zA-Z0-9])/g);
    console.log(arr3);
    document.getElementById("saida").value = "";
    document.getElementById("saidaLink").innerHTML = "";

    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        if (arr3) {
            arr3 = [...new Set(arr3)];
            arr3.forEach(preencherURL);
        }
        document.getElementById("loading").classList.add("hidden");
    }, 1000);
}

function preencherURL(url) {
    var sanitizedUrl = url.replace(/[<>]/g, "");
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
