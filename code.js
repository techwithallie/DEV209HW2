document.addEventListener('DOMContentLoaded', function() {
    let words = [];
    while (words.length < 3) {
        let word = prompt('Please enter a word (you need to enter 3 words in total):');
        if (word) { // Check if a word was entered
            words.push(word);
        } else {
            alert('No word entered, please enter a word.');
        }
    }
    displayWords(words);

    document.getElementById('redButton').addEventListener('click', function() {
        const items = document.querySelectorAll('#myList li');
        items.forEach(item => {
            item.style.color = 'red';
        });
    });

    document.getElementById('swapButton').addEventListener('click', swapFirstLast);
});

function displayWords(words) {
    const myList = document.getElementById('myList');
    myList.innerHTML = "";
    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        myList.appendChild(li);
    });
}

function capitalizeWords() {
    const words = Array.from(document.querySelectorAll('#myList li'), item => item.textContent);
    const capitalizedWords = words.map(word => word.toUpperCase());
    displayWords(capitalizedWords);
}

function swapFirstLast() {
    const words = Array.from(document.querySelectorAll('#myList li'), item => item.textContent);
    const swappedWords = words.map(word => {
        if (word.length > 1) {
            return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
        }
        return word; // Handle single-character words gracefully
    });
    displayWords(swappedWords);
}
