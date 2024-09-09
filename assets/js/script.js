function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Bom dia!";
    } else if (hours < 18) {
        greeting = "Boa tarde!";
    } else {
        greeting = "Boa noite!";
    }

    return greeting;
}

document.getElementById("greeting").innerText = getGreeting();
