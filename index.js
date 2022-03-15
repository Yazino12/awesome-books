// ARRAY OF OBJECTS TO STORE A LIST OF BOOKS

const bookCollection = [];

// Add book function

// const { title, author } = form.elements;

// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)

// const fillForm = localStorage.getItem('bookData');

// if (fillForm) {
//   const data = JSON.parse(localStorage.getItem('bookData'));

//   bookCollection.push(...data);
// }

// const container = document.querySelector('.container');

// bookCollection.forEach((book, i) => {
//   const content = `<div class="book">
//   <div class="left">
//   <p>${book.title}</p>
//   <p>by</p>
// <p>${book.author}</p>
//   </div>
// <button class="remove">Remove</button>
// </div>`;

//   container.innerHTML += content;
// });

// Remove book function

const removeBook = function () {
  const remove = document.querySelectorAll('.remove');
  const book = document.querySelectorAll('.book');

  remove.forEach((button, i) => {
    button.addEventListener('click', () => {
      book[i].remove();
      bookCollection.splice(i, 1);
      localStorage.setItem('bookData', JSON.stringify(bookCollection));
    });
  });
};

// render();
// addBook();
removeBook();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor(collectionArray) {
    this.collectionArray = collectionArray;
  }

  render = function () {
    const form = document.getElementById('book-form');
    const { title, author } = form.elements;

    const fillForm = localStorage.getItem('bookData');

    if (fillForm) {
      const data = JSON.parse(localStorage.getItem('bookData'));

      this.collectionArray.push(...data);
    } else {
      this.collectionArray = [];
    }

    // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

    const container = document.querySelector('.container');

    this.collectionArray.forEach((book) => {
      const content = `<div class="book">
    <div class="left">
    <p>${book.title}</p> 
    <p>by</p>
  <p>${book.author}</p>
    </div>
  <button class="remove">Remove</button>
  </div>`;

      container.innerHTML += content;
    });
  };

  // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

  addBook = function () {
    const form = document.getElementById('book-form');
    const { title, author } = form.elements;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new Book(title.value, author.value);

      bookCollection.push(formData);
      localStorage.setItem('bookData', JSON.stringify(bookCollection));
      window.location.reload();
    });
  };
}

const arrayCollection = new BookCollection(
  JSON.parse(localStorage.getItem('bookData'))
);
arrayCollection.render();
arrayCollection.addBook();
