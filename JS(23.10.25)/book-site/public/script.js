const booksContainer = document.getElementById("booksContainer");

async function fetchBooks() {
  const res = await fetch("/books");
  const books = await res.json();
  
  booksContainer.innerHTML = "";
  
  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-card";
    
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
    `;
    
    booksContainer.appendChild(div);
  });
}

fetchBooks();
