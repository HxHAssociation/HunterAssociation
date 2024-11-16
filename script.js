// script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const accessCode = document.getElementById('access-code').value;
    const loginMessage = document.getElementById('login-message');

    // Codice di accesso
    if (accessCode === "800850051111") {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Accesso consentito. Reindirizzamento in corso...";
        setTimeout(() => {
            window.location.href = "reserved.html"; // Reindirizza all'area riservata
        }, 1000);
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Codice di accesso errato. Riprova.";
    }

    // Resetta il campo di input
    document.getElementById('access-code').value = '';
});
