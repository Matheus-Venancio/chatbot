/**Hours */
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

/**First message */
function firstBotMessage() {
    let firstMessage = "Olá"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

/**Undefined message */
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "ola";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

/**Send Message */
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

//response
function getBotResponse(input) {

    // Simple responses
    if (input == "ola" || input == "oii" || input =="oi" || input == "olá" || input == "Olá" || input == "Ola" || input == "Oii" || input == "Oi" ) {
        return "Tudo bem? Nós temos algumas opções para você escolher: <br> 1- Meu Github <br> 2- Meu Linkedin <br> 3- Meu Whatsapp <br> 4- Meu E-mail";
    } else if (input == "1") {
        return `O meu github é: <br> ${"https://github.com/Matheus-Venancio?tab=repositories"}`;
    } else if (input == "2") {
        return `O meu Linkedin é: <br> ${"https://www.linkedin.com/in/matheusvenanciocordeiro/"}`;
    }
    else if (input == "3") {
        return `O meu Whatsapp é: <br> ${"https://api.whatsapp.com/send?phone=5519981466623"}`;
    }
    else if (input == "4") {
        return `O meu E-mail é: <br> ${"mailto:matheusvecordeiro@gmail.com?subject=&body="}`;
    }
}