// <==========================problem Statement=================>

/*
You are tasked with developing a small library management system in JavaScript. 
The system should manage a collection of books and support various operations such as
adding new books, filtering books based on certain criteria, and performing statistical
 calculations on the collection. Specifically, you need to create a Book class using the
ES6 class syntax with properties for title, author, year, and genre,
 and a method to return the book's information as a string. Additionally, 
you should create a Library class to manage the book collection,
where the constructor initializes an empty array of books 
and includes a method to add books to the collection. 
Implement a factory function to create new books.
Furthermore, the Library class should have methods to 
filter books published after a given year using filter, 
return an array of all book titles using map,
calculate the total number of books using reduce,
and calculate the average publication year of all books using reduce.
Use these components to effectively
manage the library's book collection and perform the specified operations.

*/    


class Book{
    constructor(title,author,year,genre){
        this.title=title;
        this.author=author;
        this.year=year;
        this.genre=genre;

    }
    getInfo(){
        return `${this.title} by ${this.author},published in ${this.year} genre: ${this.genre}`
    }
}

class Library{
    constructor(){
        this.books=[]
    }
    addBook(book){
        this.books.push(book)
    }
    booksAfter(year){
        return this.books.filter(book=>book.year>year)
    }
    allBooksTitles(){
        return this.books.map(book=>book.title)
    }
    totalBooks(){
        return this.books.reduce((accu)=>accu+1,0)
    }
    averagePublicationYear(){
        const totalYear=this.books.reduce((acc,book)=>acc+book.year,0)
        return totalYear/this.books.length
    }
}

function createBook(title,author,year,genre){
    return new Book(title,author,year,genre)
}

let newLibrary=new Library()

newLibrary.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
newLibrary.addBook(createBook("1984", "George Orwell", 1949, "Dystopian"));
newLibrary.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic"));
newLibrary.addBook(createBook("The Catcher in the Rye", "J.D. Salinger", 1951, "Fiction"));



console.log("All book titles:", newLibrary.allBooksTitles()); 
console.log("Books published after 1950:", newLibrary.booksAfter(1950).map(book => book.getInfo()));
console.log("Total number of books:", newLibrary.totalBooks()); 
console.log("Average publication year:", newLibrary.averagePublicationYear()); 