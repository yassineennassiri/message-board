const input = document.getElementById("message-input");
const button = document.getElementById("send-button");
const list = document.getElementById("message-list");

async function loadMessages() {
  const response = await fetch("/api/messages");
  const messages = await response.json();

  list.innerHTML = "";

  messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message.text;
    list.appendChild(item);
  });
}

button.addEventListener("click", async () => {
  const text = input.value;

  await fetch("/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  });

  input.value = "";
  loadMessages();
});

loadMessages();
