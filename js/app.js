const textArea = document.getElementById('t-area');
const words = document.getElementById('word');
const chars = document.getElementById('char');
const allText = document.querySelectorAll('.texts');
let char = 0;
let word = 0;

textArea.addEventListener('input', (e) => {
    // Split the value into words
    let wordArray = (textArea.value).match(/\S+/g);

    // Count characters
    char = textArea.value.length;
    chars.innerText = `${char} characters`;

    // Count words
    word = wordArray ? wordArray.length : 0;
    words.innerText = `${word} words`;

    // Update style based on character count
    for (let i = 0; i < allText.length; i++) {
        (char > 0) ? allText[i].style.fontWeight = 'bold' : allText[i].style.fontWeight = 'normal';
    }
});