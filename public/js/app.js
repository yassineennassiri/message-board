const input = document.getElementById('message-input');
const button = document.getElementById('send-button');

button.addEventListener('click', () => {
    const text = input.value;  // the text that the user typed in the input field
    alert('You typed: ' + text);
});
