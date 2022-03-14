// ARRAY OF OBJECTS TO STORE A LIST OF BOOKS

let bookCollection = [];

// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
const form = document.getElementById('book-form');
const { title, author } = form.elements;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    id: bookCollection.length,
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
<span hidden>${book.id}</span>
<button class="remove">Remove</button>
<hr />
</div>`;

  container.innerHTML += content;
});

// Remove book function
const remove = document.querySelectorAll('.remove');

remove.forEach((button) => {
  button.addEventListener('click', (e) => {
    const bookID = e.path.filter((el) => el.classList?.contains('book')).at(0)
      .childNodes[1].textContent;

    bookCollection = bookCollection.filter((book) => book.id !== bookID);
    console.log(bookCollection);
  });
});
