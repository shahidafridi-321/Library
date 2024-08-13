// An Array for storing the book objects acts as a database..
let myLibrary = [];

// Book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// DOM element selection
let mainContent = document.querySelector(".main-content");
let newBook = document.querySelector(".newBook");
let displayBtn = document.querySelector(".displayBtn");
let displayContainer = document.querySelector(".output-display");

// Event listener for the newBook button
newBook.addEventListener("click", () => {
  let form = document.createElement("form");
  form.classList = "data-form";
  form.setAttribute("noValidate", true);
  form.innerHTML = `
    <label for="title">Title</label>
    <input id="title" type="text" required />
    <span id="titleError" class="error"></span>
    <label for="author">Author</label>
    <input id="author" type="text" required />
    <span id="authorError" class="error"></span>
    <label for="pages">Pages</label>
    <input id="pages" type="number" required />
    <span id="pagesError" class="error"></span>
    <label for="read">Read</label>
    <input id="read" type="text" required />
    <span id="readError" class="error"></span>
    <button type="submit" class="subBtn">Add Book</button>
  `;

  mainContent.append(form);
  newBook.style.display = "none";

  const submissionBtn = form.querySelector(".subBtn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const title = form.querySelector("#title");
    const author = form.querySelector("#author");
    const pages = form.querySelector("#pages");
    const read = form.querySelector("#read");

    if (!title.value) {
      valid = false;
      showError(title, "Title is required");
    }
    if (!author.value) {
      valid = false;
      showError(author, "Author Name is required");
    }
    if (!pages.value) {
      valid = false;
      showError(pages, "Pages are required");
    }
    if (!read.value) {
      valid = false;
      showError(read, "Read status is required");
    }

    if (valid) {
      addBookToLibrary(title.value, author.value, pages.value, read.value);
      newBook.style.display = "block";
      mainContent.removeChild(form);

      // Show the hidden displayBtn
      displayBtn.style.display = "block";
    }
  });

  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }
});

// Event listener for the display button
displayBtn.addEventListener("click", display);

// Function for displaying the books on the page
function display() {
  myLibrary.forEach((item) => {
    let displayCards = document.createElement("div");
    displayCards.classList = "display-card";

    createElements(displayCards, item);
    displayContainer.appendChild(displayCards);

    displayBtn.style.display = "none";
    myLibrary = [];
  });
}

// Helper function for creating elements
function createElements(container, e) {
  container.innerHTML = `

  <p>Book Name: ${e.title}</p>
  <p>Written By: ${e.author}</p>
  <p>Contains ${e.pages} Pages</p>
  <p>Read? : ${e.read}</p>`;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  container.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    container.remove();
    displayBtn.style.display = "block";
  });
}
