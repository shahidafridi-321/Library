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

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
// DOM element selection
let mainContent = document.querySelector('.main-content');
let newBook = document.querySelector('.newBook');

newBook.addEventListener('click', () => {

  let form = document.createElement('form');
  form.classList = 'data-form';

  // let formTitle = document.createElement('h2');
  // formTitle.textContent = "Book's Info";
  // form.appendChild(formTitle);

  // helper function

  function createInputElement(textLabel, id, type) {

    const label = document.createElement('label');
    label.textContent = `${textLabel}`;
    label.setAttribute('for', id);
    form.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', type);
    input.setAttribute('required', true);
    form.appendChild(input);
  }

  createInputElement('Title', 'title', 'text');
  createInputElement('Author', 'author', 'text');
  createInputElement('Pages', 'pages', 'number');
  createInputElement('Read', 'read', 'text');

  const submissionBtn = document.createElement('button');
  submissionBtn.textContent = 'Add Book';
  submissionBtn.setAttribute('type', 'submit');
  submissionBtn.setAttribute('class','subBtn');
  form.appendChild(submissionBtn);

  mainContent.append(form);
  newBook.style.display = 'none';

  submissionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    addBookToLibrary(title, author, pages, read === true);
    newBook.style.display = 'block';
   mainContent.removeChild(form);
    display();
  });

});


// function for displaying the books on the page

function display() {
  myLibrary.forEach((item) => {
    console.log(item);
  });
}


