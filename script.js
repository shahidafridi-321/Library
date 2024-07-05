// An Array for storing the book objects acts as a database..
let myLibrary = [];

// a constructor function for book objects creations..
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function that will take data from the user , create book object from that data and store the object to the database(array)

function addBookToLibrary() {
  let title = prompt('Book name ? ', 'Hobbit');
  let author = prompt('Author of the Book? ', 'JJR');
  let pages = parseInt(prompt('How many pages the book has?', 299));
  let read = Boolean(prompt('read the book yet?', true));

  let book = new Book(title, author, pages, read);
  myLibrary.push(book)
}
// DOM element selection
let body = document.querySelector('body');
let newBook = document.querySelector('.newBook');

newBook.addEventListener('click', () => {

    let form = document.createElement('form');
    body.appendChild(form);

    let inputTitleLabel = document.createElement('label');
    form.appendChild(inputTitleLabel);
    inputTitleLabel.textContent = 'Title: ';
    inputTitleLabel.setAttribute('for', 'title');
    let inputTitle = document.createElement('input');
    form.appendChild(inputTitle);
    inputTitle.setAttribute('id', 'title');
    inputTitle.setAttribute('type', 'text');


    let inputAuthorLabel = document.createElement('label');
    form.appendChild(inputAuthorLabel);
    inputAuthorLabel.textContent = 'Author: ';
    inputAuthorLabel.setAttribute('for', 'author');
    let inputAuthor = document.createElement('input');
    form.appendChild(inputAuthor);
    inputAuthor.setAttribute('id', 'author');
    inputAuthor.setAttribute('type', 'text');


    let inputPagesLabel = document.createElement('label');
    form.appendChild(inputPagesLabel);
    inputPagesLabel.textContent = 'Pages: ';
    inputPagesLabel.setAttribute('for', 'pages');
    let inputPages = document.createElement('input');
    form.appendChild(inputPages);
    inputPages.setAttribute('id', 'pages');
    inputPages.setAttribute('type', 'number');


    let inputReadLabel = document.createElement('label');
    form.appendChild(inputReadLabel);
    inputReadLabel.textContent = 'Read: ';
    inputReadLabel.setAttribute('for', 'read');
    let inputRead = document.createElement('input');
    form.appendChild(inputRead);
    inputRead.setAttribute('id', 'read');
    inputRead.setAttribute('type', 'text');

    body.removeChild(newBook);

});

// function for displaying the books on the page

myLibrary.forEach(item => {
  let card = document.createElement('div');
  body.appendChild(card);
  card.innerHTML = `<h2>Title ${item.title}</h2><h2>Author ${item.author}</h2><h2>Pages ${item.pages}</h2><h2>Read ${item.read}</h2>`
});

console.log();