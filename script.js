function sendMessage() {
    let input = document.getElementById("chat-input");
    let box = document.getElementById("chat-box");

    let message = input.value;
    if (message === "") return;

    let p = document.createElement("p");
    p.textContent = "You: " + message;

    box.appendChild(p);

    input.value = "";

    // Save to local storage
    let messages = JSON.parse(localStorage.getItem("chat")) || [];
    messages.push(message);
    localStorage.setItem("chat", JSON.stringify(messages));
}

window.onload = function() {
    let box = document.getElementById("chat-box");
    let messages = JSON.parse(localStorage.getItem("chat")) || [];

    messages.forEach(msg => {
        let p = document.createElement("p");
        p.textContent = "You: " + msg;
        box.appendChild(p);
    });
};
