const input = document.getElementById('message-input');
const button = document.getElementById('send-button');

button.addEventListener("click", async () => {
  const text = input.value;

  const response = await fetch("/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  });

  const data = await response.json();
  alert("backend replied: " + data.text);
});
