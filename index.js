// ARRAY OF OBJECTS TO STORE A LIST OF BOOKS

const bookCollection = [];

// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
const form = document.getElementById('book-form');
const { title, author } = form.elements;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    id: 1,
    title: title.value,
    author: author.value,
  };

  bookCollection.push(formData);
  localStorage.setItem('bookData', JSON.stringify(bookCollection));
});

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
const remove = document.querySelectorAll('.remove');

remove.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e);
  });
});
