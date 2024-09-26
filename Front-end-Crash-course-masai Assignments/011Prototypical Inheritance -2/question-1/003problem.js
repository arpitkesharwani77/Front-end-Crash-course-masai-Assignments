/* 
<========================= problem-3 ==========================>

    3. Use prototypical inheritance to create a Library prototype with a method getBooks() .
    Then, create two other prototypes,PublicLibrary and UniversityLibrary , 
    that inherit from Library . The publicLibrary should have an additional method lendBook() ,
    and UniversityLibrary should have a method addResearchPapers() . 
    Demonstrate this with instances of both libraries. 
    
    
 */   

// Step 1: Define the Library constructor function
function Library(name) {
    this.name = name;
    this.books = [];
}

// Step 2: Add a method to Library.prototype to get the books
Library.prototype.getBooks = function() {
    console.log(`Books in ${this.name}:`, this.books);
};

// Step 3: Define the PublicLibrary constructor function
function PublicLibrary(name) {
    Library.call(this, name); // Call the Library constructor with the library name
}

// Step 4: Inherit Library prototype in PublicLibrary using Object.setPrototypeOf()
Object.setPrototypeOf(PublicLibrary.prototype, Library.prototype);

// Step 5: Add the lendBook method to PublicLibrary.prototype
PublicLibrary.prototype.lendBook = function(book) {
    console.log(`${book} has been lent from ${this.name}`);
};

// Step 6: Define the UniversityLibrary constructor function
function UniversityLibrary(name) {
    Library.call(this, name); // Call the Library constructor with the library name
    this.researchPapers = [];
}

// Step 7: Inherit Library prototype in UniversityLibrary using Object.setPrototypeOf()
Object.setPrototypeOf(UniversityLibrary.prototype, Library.prototype);

// Step 8: Add the addResearchPapers method to UniversityLibrary.prototype
UniversityLibrary.prototype.addResearchPapers = function(paper) {
    this.researchPapers.push(paper);
    console.log(`Research paper "${paper}" has been added to ${this.name}`);
};

// Step 9: Demonstrate the functionality

// Create an instance of PublicLibrary
const publicLibrary = new PublicLibrary('Downtown Public Library');
publicLibrary.books.push('The Great Gatsby', 'Moby Dick');
publicLibrary.getBooks(); // Output: Books in Downtown Public Library: ['The Great Gatsby', 'Moby Dick']
publicLibrary.lendBook('The Great Gatsby'); // Output: The Great Gatsby has been lent from Downtown Public Library

// Create an instance of UniversityLibrary
const uniLibrary = new UniversityLibrary('Harvard University Library');
uniLibrary.books.push('Advanced Physics', 'Quantum Mechanics');
uniLibrary.getBooks(); // Output: Books in Harvard University Library: ['Advanced Physics', 'Quantum Mechanics']
uniLibrary.addResearchPapers('AI in Robotics'); // Output: Research paper "AI in Robotics" has been added to Harvard University Library
