let bookArray = ["The Great Gatsby", "To Kill a Mockingbird", "1984"];

function renderBookList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    bookArray.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        bookList.appendChild(li);
    });
}
renderBookList();

function addBook() {
    const bookTitle = document.getElementById('inputText').value;
    if (bookTitle) {
        bookArray.unshift(bookTitle); // Add to the top
        renderBookList();
        document.getElementById('inputText').value = '';
    }
}

document.getElementById('addBook').addEventListener('click', addBook);

function addBook2() {
    const bookTitle = document.getElementById('inputText').value;
    if (bookTitle) {
        bookArray.push(bookTitle); // Add to the bottom
        renderBookList();
        document.getElementById('inputText').value = '';
    }
}

document.getElementById('addBook2').addEventListener('click', addBook2);

function removeBookFront() {
    if (bookArray.length > 0) {
        bookArray.shift(); // Remove the first (top) book
        renderBookList();
    }
}

document.getElementById('removebookfront').addEventListener('click', removeBookFront);

function removeBookBack() {
    if (bookArray.length > 0) {
        bookArray.pop(); // Remove the last (bottom) book
        renderBookList();
    }
}
document.getElementById('removebookback').addEventListener('click', removeBookBack);

