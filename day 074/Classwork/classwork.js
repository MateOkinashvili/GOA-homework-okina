class Book {
    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    details() {
        console.log('Book name:' + this.name );
        console.log('Book author:' + this.author);
        console.log('Book pages:' + this.pages )
    }
}

let myBook = new Book('Harry Potter', '	J. K. Rowling', '766')

Book.details()