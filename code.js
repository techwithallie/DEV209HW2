document.addEventListener('DOMContentLoaded', function() {
    let words = [];
    while (words.length < 3) {
        let word = prompt('Please enter a word (you need to enter 3 words in total):');
        if (word) {
            words.push(word);
        } else {
            alert('No word entered, please enter a word.');
        }
    }
    displayWords(words);

    // Attach the event listener for the 'RED' button using an anonymous function
    document.getElementById('redButton').addEventListener('click', function() {
        const items = document.querySelectorAll('#myList li');
        items.forEach(item => {
            item.style.color = 'red';
        });
    });

    // Attach the event listener for the 'SWAP' button using a named function
    document.getElementById('swapButton').addEventListener('click', swapFirstLast);
});

function displayWords(words) {
    const myList = document.getElementById('myList');
    myList.innerHTML = '';
    words.forEach(function(word) {
        let li = document.createElement('li');
        li.textContent = word;
        myList.appendChild(li);
    });
}

// Function to capitalize words - defined for 'onclick' in HTML
function capitalizeWords() {
    const words = Array.from(document.querySelectorAll('#myList li'), item => item.textContent);
    const capitalizedWords = words.map(word => word.toUpperCase());
    displayWords(capitalizedWords);
}

// Named function to swap first and last letters of each word
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
