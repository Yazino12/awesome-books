// BOOKS COLLECTION CLASS

function Book(title, author) {
  this.title = title;
  this.author = author;
}

class BookCollection {
  constructor(collectionArray) {
    this.collectionArray = collectionArray;
  }

  // CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

  render() {
    if (JSON.parse(localStorage.getItem('bookData'))) {
      this.collectionArray = JSON.parse(localStorage.getItem('bookData'));
    } else {
      this.collectionArray = [];
    }

    const container = document.querySelector('.container');

    const listItemNav = document.querySelector('.menu-item1');
    const addItemNav = document.querySelector('.menu-item2');
    const contactItemNav = document.querySelector('.menu-item3');

    const mainContainer = document.querySelector('.main-section');

    listItemNav.addEventListener('click', () => {
      const listContent = `   
      <section class="list">
        <h1>All awesome books</h1>
        <div class="container">
        ${this.collectionArray.forEach((book) => {
          `<div class="book">
            <div class="left">
              <p>${book.title}</p>
              <p>by</p>
              <p>${book.author}</p>
            </div>
              <button class="remove">Remove</button>
          </div>`;
        })}
        </div>
      </section>`;

      mainContainer.innerHTML = listContent;
      console.log(this.collectionArray);
    });

    addItemNav.addEventListener('click', () => {
      const addContent = `
      <section class="add">
      <h2>Add a new book</h2>
      <form id="book-form" method="post" action="/">
        <input
          name="title"
          id="title"
          type="text"
          maxlength="30"
          placeholder="Title"
          required
        />
        <label for="title" hidden></label>
        <input
          name="author"
          id="author"
          type="text"
          maxlength="30"
          placeholder="Author"
          required
        />
        <label for="author" hidden></label>
        <div><button type="submit">Add</button></div>
      </form>
    </section>

      `;

      mainContainer.innerHTML = addContent;
    });

    contactItemNav.addEventListener('click', () => {
      const contactContent = `
      <section class="contact">
      <h2>Contact information</h2>
      <div class="contact-lower">
        <p>
          Do you have any question or you just want to say "Hello"? <br />
          You can reach out to us!
        </p>
        <ul>
          <li>Our email: mail@mail.com</li>
          <li>Our phone number: 004422335566889</li>
          <li>Our Address: Streetname 22, 84503 City, Country</li>
        </ul>
      </div>
    </section>`;

      mainContainer.innerHTML = contactContent;
    });

    const displayDate = document.querySelector('.date');

    const date = new Date();
    const options = {
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const options1 = { month: 'long', day: 'numeric' };

    const d = date.toLocaleDateString('en-US', options1);
    const all = date.toLocaleDateString('en-US', options);

    displayDate.textContent = `${d}th ${all}`;
  }

  // Add books

  addBook() {
    const form = document.getElementById('book-form');
    console.log(form);
    const { title, author } = form.elements;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new Book(title.value, author.value);

      this.collectionArray.push(formData);
      localStorage.setItem('bookData', JSON.stringify(this.collectionArray));
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
}

const arrayCollection = new BookCollection(
  JSON.parse(localStorage.getItem('bookData'))
);
arrayCollection.render();
arrayCollection.addBook();
arrayCollection.removeBook();
