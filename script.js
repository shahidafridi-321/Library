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
// selects main content container
let mainContent = document.querySelector('.main-content');

// selects the newBook button
let newBook = document.querySelector('.newBook');

// selects display button
let displayBtn = document.querySelector('.displayBtn');

// selects the display container
let displayContainer = document.querySelector('.output-display');


// event listener to the newbook button
newBook.addEventListener('click', () => {

  let form = document.createElement('form');
  form.classList = 'data-form';


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

  // creates sub mission button
  const submissionBtn = document.createElement('button');
  submissionBtn.textContent = 'Add Book';
  submissionBtn.setAttribute('type', 'submit');
  submissionBtn.setAttribute('class', 'subBtn');
  form.appendChild(submissionBtn);

  mainContent.append(form);
  //hidding the newBook btn from the display
  newBook.style.display = 'none';

  submissionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    addBookToLibrary(title, author, pages, read);
    newBook.style.display = 'block';
    mainContent.removeChild(form);

    // showing the hidden displayBtn 
    displayBtn.style.display = 'block';
  });

});


// function for displaying the books on the page
function display() {
  myLibrary.forEach((item) => {
    let displayCards = document.createElement('div');
    displayCards.classList = 'display-card';

    createElements(displayCards, item);
    displayContainer.appendChild(displayCards);

    displayBtn.style.display = 'none';
    myLibrary = [];

  });
}
// its a helper function created for creating elements
function createElements(container, e) {
  let title = document.createElement('p');
  let author = document.createElement('p');
  let pages = document.createElement('p');
  let read = document.createElement('p');

  title.textContent = `Book Name : ${e.title}`;
  author.textContent = `Written By : ${e.author}`;
  pages.textContent = `Contains ${e.pages} Pages`;
  read.textContent = `Read ? : ${e.read}`;

  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(read);
}

// added an event listener to display button 
displayBtn.addEventListener('click', display);


