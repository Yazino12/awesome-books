// ARRAY OF OBJECTS TO STORE A LIST OF BOOKS

const bookCollection = [];

// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
const form = document.getElementById('book-form');
const { title, author } = form.elements;

function addBook() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      title: title.value,
      author: author.value,
    };

    bookCollection.push(formData);
    localStorage.setItem('bookData', JSON.stringify(bookCollection));
    document.location.reload();
  });
}

const fillForm = localStorage.getItem('bookData');

if (fillForm) {
  const data = JSON.parse(localStorage.getItem('bookData'));

  bookCollection.push(...data);
}

// Add book function

// CREATING BOOKS FROM ARRAY DATA AND POPULATING DYNAMICALLY

const container = document.querySelector('.container');

bookCollection.forEach((book) => {
  const content = `<div class="book">
<p>${book.title}</p>
<p>${book.author}</p>
<button class="remove">Remove</button>
<hr />
</div>`;

  container.innerHTML += content;
});

// Remove book function
function removeBook() {
  const remove = document.querySelectorAll('.remove');
  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', () => {
      const newBookCollection = bookCollection.filter(
        (book) => book !== bookCollection[i],
      );
      localStorage.setItem('bookData', JSON.stringify(newBookCollection));
      document.location.reload();
    });
  }
}

addBook();
removeBook();
