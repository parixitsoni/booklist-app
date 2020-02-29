class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'The One Thing',
                author: 'Gary Killer',
                isbn: '978-1-8485-4960-9'
            },
            {
                title:"Man's Search for Meaning",
                author:'Victore E. Frankl',
                isbn: '978-1-84-604124-2'
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookTOList(book)); 
    }

    static addBookTOList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>`;

        list.appendChild(row);
    }
}


document.addEventListener('DOMContentLoaded', UI.displayBooks);