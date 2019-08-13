﻿var allBooks = [
    {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date(2011, 0, 1).toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Heidi ",
        date: new Date('October 05, 1815').toLocaleDateString(),
        autor: "Johanna Spyri",
        rate: 2,
        pages: 789,
        autorAtrr: "Around 1875"
    }, {
        name: "Meus Artigos",
        date: new Date('March 17, 1874').toLocaleDateString(),
        autor: "Jacob Burckhardt",
        rate: 18,
        pages: 550,
        autorAtrr: "Phaidon-Verlag"
    }, {
        name: "The Sketch Book",
        date: new Date('May 08, 1805').toLocaleDateString(),
        autor: "Washington Irving",
        rate: 5,
        pages: 258,
        autorAtrr: "William Lyon Phelps (1865-1943)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    }, {
        name: "Jenseits von Gut und Böse: prelude to a philosophy of the future",
        date: new Date('December 17, 1905').toLocaleDateString(),
        autor: "Friedrich Nietzsche",
        rate: 5,
        pages: 150,
        autorAtrr: "Friedrich Wilhelm Nietzsche (1844-1900)"
    },
];

function InitBooksData() {
    var self = this;
    
    self.books = ko.observableArray(allBooks);

    self.isEditBook = ko.observable(false);
    self.shouldShowMessage = ko.observable()
    self.newBook = ko.observable();
    self.newBook({
        autor: '',
        rate: '',
        pages: '',
        autorAtrr: ''
    });        

    self.addBook = function () {
        self.books.push();
    }
  
    self.removeBook = function (book) {
      
        self.books.remove(book)
        self.books(self.books);
        // self.books.removeAll()
    }

    self.editBook = function () {
        console.log('brtsa');
        self.isEditBook(true)
    }
}

ko.applyBindings(new InitBooksData());
