
var allBooks = [
    {
        id: 0,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date(2011, 0, 1).toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 1,
        name: "Heidi ",
        date: new Date('October 05, 1815').toLocaleDateString(),
        autor: "Johanna Spyri",
        firstName: "Johanna",
        lastName: "Spyri",
        rate: 2,
        pages: 789,
        autorAtrr: "Around 1875"
    }, {
        id: 2,
        name: "Meus Artigos",
        date: new Date('March 17, 1874').toLocaleDateString(),
        autor: "Jacob Burckhardt",
        firstName: "Johanna",
        lastName: "Spyri",
        rate: 18,
        pages: 550,
        autorAtrr: "Phaidon-Verlag"
    }, {
        id: 3,
        name: "The Sketch Book",
        date: new Date('May 08, 1805').toLocaleDateString(),
        autor: "Washington Irving",
        firstName: "Johanna",
        lastName: "Spyri",
        rate: 5,
        pages: 258,
        autorAtrr: "William Lyon Phelps (1865-1943)"
    }, {
        id: 4,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 5,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 6,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 7,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 8,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 9,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 10,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 11,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 12,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 13,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 14,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        id: 15,
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        firstName: "Friedrich",
        lastName: "Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }
];

var Book = function (book) {
    var self = this;
    self.id = ko.observable(book.id);
    self.name = ko.observable(book.name);
    self.date = ko.observable(book.date);
    self.autor = ko.observable(book.autor);
    self.rate = ko.observable(book.rate);
    self.pages = ko.observable(book.pages);
    self.autorAtrr = ko.observable(book.autorAtrr);
    self.firstName = ko.observable(book.firstName);
    self.lastName = ko.observable(book.lastName);
};

var Autor = function (autor) {
    var self = this;
    self.firstName = ko.observable(autor.firstName);
    self.lastName = ko.observable(autor.lastName);
    self.bookQuantity = ko.observable(autor.bookQuantity);
}


function InitBooksData(allBooks) {
    var self = this;

    self.books = ko.observableArray([]);
    // self.books(allBooks);
    self.isEditBook = ko.observable(false);
    self.isAddingBook = ko.observable(false);
    self.shouldShowMessage = ko.observable();
    self.editableBook = ko.observable(new Book({}));
    self.editableAutor = ko.observable(new Autor({}));
    //self.editableBook = {};

    if (typeof allBooks !== 'undefined') {
        $.each(allBooks, function (i, el) {
            //self.books.push(new Book(el));
            self.books.push(new Book({
                id: el.id,
                name: el.name,
                date: el.date,
                autor: el.autor,
                rate: el.rate,
                pages: el.pages,
                autorAtrr: el.pages,
                lastName: el.lastName,
                firstName: el.firstName
            }));
        });
    }


    self.addBook = function () {       
        self.isEditBook(true);
        self.isAddingBook(true);
    }

    self.addNewBook = function (book) {
        console.log('added book', book)
        //self.editableBook.date = '17.04.2019'
        //self.books.push(new Book({            
        //    name: self.editableBook.name,
        //    date: self.editableBook.date,
        //    autor: self.editableBook.autor,
        //    rate: self.editableBook.rate,
        //    pages: self.editableBook.pages,
        //    autorAtrr: self.editableBook.pages
        //}));
        console.log(self.editableBook());
        self.books.push(self.editableBook())
        console.log(self.books());
        self.isAddingBook(false);
    }

    this.removeBook = function (book) {
        self.books.remove(book);
    }
    
    self.editBook = function (book) {
        tempBook = book;
        ko.cleanNode('yoir_selector')
        //self.editableBook(ko.mapping.fromJS(ko.mapping.toJS(book)));
        
        self.editableBook(book)
       // self.editableBook = book;

        self.isEditBook(true);
        //ko.applyBindings(self.editableBook, $('your_selector')[0])
    }

    self.updateBook = function () {
        var editabledBook = self.books().filter(b => b.id() == self.editableBook().id());
       
        editabledBook = book;
        
       // tempBook = ko.mapping.fromJS(ko.mapping.toJS(self.editableBook()));       
        self.isEditBook(false);
    }

    self.editAutor = function (book) {
        console.log(book.lastName())
        console.log(book.firstName())
        var obj = new Autor({
            lastName: book.lastName(),
            firstName: book.firstName(),
            bookQuantity: 256
        });
        console.log('obj = ', obj)
        self.editableAutor = obj;
        console.log(self.editableAutor)
    }
}

ko.applyBindings(new InitBooksData(allBooks));


