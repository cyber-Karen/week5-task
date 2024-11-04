//defining the Book Class

class Book {
    constructor(title, author, ISBN) {
      this.title=title;
      this.author=author;
      this.ISBN=ISBN;
      this.isBorrowed=false
      
    }
    //method to describe the book
    description() {
      return`${this.title} by ${this.author}`;
    }
  }
   //to define the user class
  
   class User {
    constructor(name, userID) {
      this.name=name;
      this.userID=userID
      this.borrowBooks=[];
      
    }
   }
  
   //to define library class
  
   class Library {
    constructor() {
      this.books=[];
      this.users=[];
    }
    addBook(book){
      this.books.push(book);
      console.log(`${book.title} by ${book.author} was added`)
    }
  
    borrowBook(user, book){
      if (book.isBorrowed){
        console.log(`${book.title} is alredy borrowed`);
        return;
      }
      book.isBorrowed=true
      user.borrowBooks.push(book);
      console.log(`${user.name} borrowed ${book.title}.`);
    }
    returnBook(user, book){
      let index = user.borrowBooks.indexOf(book);
      if(index > -1) {
        user.borrowBooks.splice(index, 1);
        book.isBorrowed=false;
        console.log(`${user.name} returned ${book.title}.`)
      } else{
        console.log(`${user.name} did not borrow ${book.title}.`)
      }
    }
  
   }
  
   // implementing polymorphism
  
   class Novel extends Book {
    description() {
      return`Novel: ${ this.title} by ${this.author}`;
      }
   }
  class Magazine extends Book {
  
    description() {
      return `Magazine: ${this.title} by ${this.author}`;
      
    }
  }
   class Researchpaper extends Book{
    description() {
      return `Research paper: ${ this.title} by ${this.author}`;
    }
   }
  
   //example of the code 
  
   let library= new Library();
  
   let book1= new Novel('love in the sea', 'Maxwell ike', '4563728936');
   let book2= new Magazine('punch', 'felix', 7835362893);
   let book3= new Researchpaper('thermodynamic', 'Andrew','5372689765');
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  let user1= new User ('james', '845')
  
  library.borrowBook(user1, book1);
  library.returnBook(user1, book1);
  library.borrowBook(user1, book2);
  
  console.log(book1.description());
  console.log(book2.description());
  console.log(book3.description());