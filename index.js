// BOOKS COLLECTION CLASS

function Book(title, author) {
  this.title = title;
  this.author = author;
}

class BookCollection {
  constructor(collectionArray) {
    this.collectionArray = collectionArray;
  }

  // Add books

  addBook() {
    const form = document.getElementById('book-form');
    const { title, author } = form.elements;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new Book(title.value, author.value);

      this.collectionArray.push(formData);
      localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
      window.location.reload();
    });
  }

  // Remove books

  removeBook = function () {
    const remove = document.querySelectorAll('.remove');
    const book = document.querySelectorAll('.book');

    remove.forEach((button, i) => {
      button.addEventListener('click', () => {
        book[i].remove();
        this.collectionArray.splice(i, 1);
        localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
      });
    });
  };

  // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

  render() {
    if (JSON.parse(localStorage.getItem('bookData'))) {
      this.collectionArray = JSON.parse(localStorage.getItem('bookData'));
    } else {
      this.collectionArray = [];
    }

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
  }
}

const arrayCollection = new BookCollection(
  JSON.parse(localStorage.getItem('bookData')),
);
arrayCollection.render();
arrayCollection.addBook();
arrayCollection.removeBook();
